import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = '30193176-963107e0b52f3e6b90e541e40';

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${key}&image1_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};
