import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StyledButton } from '../components/StyledButton';
import { colors, globalStyles } from '../styles/global';
import { identifyPlant } from '../../api/plantIdentification';
import { Loader } from '../components/Loader';

export default function ScannerScreen ({ navigation, route }) {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [photoUri, setPhotoUri] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [plantData, setPlantData] = useState(null);
  const { actionType } = route.params;
  console.log(actionType);

  useEffect(() => {
    if (actionType === 'upload') {
      pickGalleryImage();
    }
  }, []);

  const takePicture = async () => {
    if (cameraRef.current && cameraReady) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);

      try {
        await handleIdentifyPlant(photo.uri);
      } catch {
        setError("Failed to capture photo. Please try again.");
      }
    }
  };

 const pickGalleryImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri); 
    }
  };

  const handleIdentifyPlant = async (uri) => {
    try {
      setLoading(true);
      const { data, error } = await identifyPlant(uri);
      data && setPlantData(data.results[0]);
      error && setError(error);
    } catch {
      setError("Failed to identify plant. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  if (!permission || loading) return <Loader message={loading ? 'Identifying plant...' : 'Loading camera permissions...'} />;

  if (!permission.granted) {
    return (
      <View style={globalStyles.container}>
        <Text style={styles.message}>
          Plant Identifier requires access to your camera
        </Text>
        <StyledButton type="primary" onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  if (error) return (
    <View style={globalStyles.container}>
      <Text>{error}</Text>
      <StyledButton type="secondary" title="Back to home" onPress={() => navigation.navigate('Home')} />
    </View>
  )

  console.log(plantData)

  return plantData && photoUri ? (
    <View style={[globalStyles.container, { justifyContent: 'space-evenly', alignItems: 'center' }]}>
        <Text style={[globalStyles.heading, { marginBottom: 0 }]}>
            {plantData.species.scientificNameWithoutAuthor}
        </Text>
        <Text style={{ color: colors.secondary }}>
          Part of the {plantData.species.family.scientificNameWithoutAuthor} family
        </Text>
        <Image source={{ uri: photoUri }} style={styles.plantImage} />
        {/* <Image source={require('../../assets/123.png')} style={styles.plantImage} /> */}
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: colors.secondary, fontSize: 15, marginBottom: 10 }}>
            Commonly known as:
          </Text>
          <Text style={{ color: colors.secondary, fontSize: 22, fontWeight: 600 }}>
            {plantData.species.commonNames[0]}
          </Text>
        </View>
        <StyledButton type="secondary" title="Back to home" onPress={() => navigation.navigate('Home')} />
    </View>
  ) : (
    <CameraView style={styles.camera} ref={cameraRef} onCameraReady={() => setCameraReady(true)}>
        <TouchableOpacity style={styles.cameraButton} onPress={takePicture} />
    </CameraView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 14,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  cameraButton: {
    borderWidth: 5,
    borderColor: colors.primary,
    backgroundColor: colors.secondary,
    borderRadius: 120,
    width: 80,
    height: 80,
    marginBottom: 50,
  },
  plantImage: {
    width: 200,
    height: 200,
    borderWidth: 5,
    borderColor: colors.primary,
    borderRadius: 120,
    alignSelf: 'center',
  },
});