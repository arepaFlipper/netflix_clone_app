import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useMovie = (id?: string) => {
  const config = {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  }
  const url = (id) ? `/api/movies/${id}` : null;
  const { data, error, isLoading } = useSWR(url, fetcher, config);
  return { data, error, isLoading }
}

export default useMovie;
