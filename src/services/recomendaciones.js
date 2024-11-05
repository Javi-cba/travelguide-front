import axios from 'axios';

const URL = import.meta.env.VITE_URL_BACK;

export const getRecomendaciones = async email => {
  try {
    const response = await axios.post(
      `${URL}/recomendaciones/usuario?email=${email}`
    );

    return response.data;
  } catch (error) {
    console.error('Error en getRecomendaciones:', error);
    throw error;
  }
};
