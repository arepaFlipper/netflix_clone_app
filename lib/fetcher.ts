import axios from 'axios';

const fetcher = async (url: string) => {
  const response = await axios.get(url).then((res) => res.data);
  return response;
}

export default fetcher;
