import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useFavorites = () => {
  const options = { revalidateIfStale: false, revalidateOnFocus: false, revalidateOnReconnect: false };
  const { data, error, isLoading, mutate } = useSWR('/api/favorites', fetcher, options);
  return { data, error, isLoading, mutate };
}

export default useFavorites;
