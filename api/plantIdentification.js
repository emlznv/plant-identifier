import axios from 'axios';

const API_KEY = '2b10qSnxtLkf9oM11HETbtiBaO';

export const identifyPlant = async (imageUri) => {
  let result = null;
  let errorMsg = '';
  const formData = new FormData();

  formData.append('images', {
    uri: imageUri,
    name: 'image.jpg',
    type: 'image/jpeg',
  });

  const project = 'all';

  try {
    const { data } = await axios.post(
      `https://my-api.plantnet.org/v2/identify/${project}?api-key=${API_KEY}`,
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
