import api from './api';

export const getPatients = async () => {
  const response = await api.get('/patients');
  return response.data;
};

// export const getPatientById = async (id: string) => {
//   const response = await api.get(`/patients/${id}`);
//   return response.data;
// };
