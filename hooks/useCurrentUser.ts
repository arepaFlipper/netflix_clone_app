import useSwr from 'swr'

import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {
  const response = useSwr('/api/current', fetcher);
  return response
};

export default useCurrentUser;
