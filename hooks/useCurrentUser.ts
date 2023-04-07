import useSwr from 'swr'

import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);
  return { data, error, isLoading, mutate };
}
  const response = useSwr('/api/current', fetcher);
  return response
};

export default useCurrentUser;
