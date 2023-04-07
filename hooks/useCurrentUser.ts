import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);
  console.log(`☣️ %cuseCurrentUser.ts:7 - data, error, isLoading, mutate`, 'font-weight:bold; background:#25da00;color:#fff;'); //DELETEME
  console.log(data, error, isLoading, mutate); // DELETEME
  return { data, error, isLoading, mutate };
}

export default useCurrentUser;
