import axios from 'axios';

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
      `${process.env.API_URL}/all?api-key=${process.env.API_KEY}`,
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
