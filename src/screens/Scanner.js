import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { identifyPlant } from '../../api/plantIdentification';
import { Loader } from '../components/Loader';
import { Camera } from '../components/Camera';
import { PlantOverview } from '../components/PlantOverview';

export const Scanner = ({ navigation, route }) => {
  const { actionType } = route.params;
  const [photoUri, setPhotoUri] = useState('');
  const [plantData, setPlantData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const showCamera = !photoUri && !plantData && actionType === 'scan';
  const showPlantOverview = photoUri && plantData;

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
      navigation.navigate('Home');
    } else {
      handleIdentifyPlant(result.assets[0].uri);
    };
  };

  const handleIdentifyPlant = async (uri) => {
    if (!uri) {
      setError('Failed to capture photo. Please try again.');
      return
    }

    try {
      setPhotoUri(uri);
      setLoading(true);
      const { data, error } = await identifyPlant(uri);
      data && setPlantData(data.results[0]);
      error && setError(error);
    } catch {
      setError('Failed to identify plant. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader message="Identifying plant..." />;
  if (error) return <Text>{error}</Text>;

  return (
    <>
      {showCamera && <Camera onCapture={(uri) => handleIdentifyPlant(uri)} />}
      {showPlantOverview && (
        <PlantOverview
          plantData={plantData}
          photoUri={photoUri}
          onBack={() => navigation.navigate('Home')}
        />
      )}
    </>
  );
}
