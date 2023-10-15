import useSwr from 'swr'

import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {
  const response = useSwr('/api/current', fetcher);
  console.log(`🔓%cuseCurrentUser.ts:7 - response`, 'font-weight:bold; background:#25da00;color:#fff;'); //DELETEME
  console.log(response); // DELETEME
  return response
};

export default useCurrentUser;
