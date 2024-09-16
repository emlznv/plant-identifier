import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Loader } from '../components/Loader';
import { colors, globalStyles } from '../styles/global';

export const Camera = ({ onCapture }) => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [cameraReady, setCameraReady] = useState(false);

  if (!permission) return <Loader message="Loading camera permissions..." />;

  if (!permission.granted) {
    return (
      <View style={globalStyles.container}>
        <Text>Camera access is required</Text>
        <StyledButton type="primary" onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current && cameraReady) {
      const photo = await cameraRef.current.takePictureAsync();
      onCapture(photo.uri);
    }
  };

  return (
    <CameraView style={styles.camera} ref={cameraRef} onCameraReady={() => setCameraReady(true)}>
      <TouchableOpacity style={styles.cameraButton} onPress={takePicture} />
    </CameraView>
  );
};

const styles = StyleSheet.create({
  camera: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
  cameraButton: {
    borderWidth: 5,
    borderColor: colors.primary,
    backgroundColor: colors.secondary,
    borderRadius: 120,
    width: 80,
    height: 80,
    marginBottom: 50,
  },
});
