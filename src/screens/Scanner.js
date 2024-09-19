import { Loader } from '../components/Loader';
import { Camera } from '../components/Camera';
import { PlantOverview } from '../components/PlantOverview';
import { Error } from '../components/Error';
import { useScanner } from '../hooks/useScanner';

export const Scanner = ({ navigation, route }) => {
  const { actionType } = route.params;
  const { photoUri, plantData, loading, error, handleIdentifyPlant } = useScanner(actionType, handleGoBack);

  const showCamera = !photoUri && !plantData && actionType === 'scan';
  const showPlantOverview = photoUri && plantData;

  const handleGoBack = () => navigation.navigate('Home');

  if (loading) return <Loader message="Identifying plant..." />;
  if (error) return <Error message={error} onBack={handleGoBack} />;

  return (
    <>
      {showCamera && <Camera onCapture={(uri) => handleIdentifyPlant(uri)} />}
      {showPlantOverview && (
        <PlantOverview
          plantData={plantData}
          photoUri={photoUri}
          onBack={handleGoBack}
        />
      )}
    </>
  );
}
