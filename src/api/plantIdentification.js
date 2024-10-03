import axios from 'axios';
import Constants from 'expo-constants';

const apiKey = Constants.expoConfig.extra.apiKey ?? process.env.EXPO_PUBLIC_API_KEY;
const apiUrl = Constants.expoConfig.extra.apiUrl ?? process.env.EXPO_PUBLIC_API_URL;

export const identifyPlant = async (imageUri) => {
  let result = null;
  let errorMsg = '';
  const formData = new FormData();

  formData.append('images', {
    uri: imageUri,
    name: 'image.jpg',
    type: 'image/jpeg',
  });

  try {
    const { data } = await axios.post(
      `${apiUrl}/identify/all?api-key=${apiKey}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    result = data;
  } catch {
    errorMsg = 'Failed to identify plant. Please try again.';
  }

  return { data: result, error: errorMsg }
};
