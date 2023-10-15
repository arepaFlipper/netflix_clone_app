import axios from 'axios';

const fetcher = async (url: string) => {
  console.log(`😇%cfetcher.ts:4 - url`, 'font-weight:bold; background:#15ea00;color:#fff;'); //DELETEME
  console.log(url); // DELETEME
  const response = await axios.get(url).then((res) => res.data);
  console.log(`🕐%cfetcher.ts:5 - response`, 'font-weight:bold; background:#1be400;color:#fff;'); //DELETEME
  console.log(response); // DELETEME
  return response;
}

export default fetcher;
