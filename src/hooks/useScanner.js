import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { identifyPlant } from '../../api/plantIdentification';
import { useHistory } from './useHistory';

export const useScanner = (actionType, goBack) => {
  const [photoUri, setPhotoUri] = useState('');
  const [plantData, setPlantData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { addToHistory } = useHistory();

  useEffect(() => {
    if (actionType === 'upload') {
      pickGalleryImage();
    }
  }, []);

  const pickGalleryImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (result.canceled) {
      goBack();
    } else {
      handleIdentifyPlant(result.assets[0].uri);
    }
  };

  const handleIdentifyPlant = async (uri) => {
    if (!uri) {
      setError('Failed to capture photo. Please try again.');
      return;
    }

    try {
      setPhotoUri(uri);
      setLoading(true);
      const { data, error } = await identifyPlant(uri);
      
      if (data) {
        const plantMatch = data.results[0];
        setPlantData(plantMatch);

        addToHistory({
            name: plantMatch.species.commonNames[0],
            scientificName: plantMatch.species.scientificNameWithoutAuthor,
            family: plantMatch.species.family.scientificNameWithoutAuthor,
            photoUri: uri,
            timestamp: new Date().toISOString(),
        });
      }
      error && setError(error);
    } catch {
      setError('Failed to identify plant. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    photoUri,
    plantData,
    loading,
    error,
    handleIdentifyPlant,
  };
};
