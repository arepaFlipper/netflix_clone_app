import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useMovieList = () => {
  const options = {
    revalidateIfState: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  }
  const { data, error, isLoading } = useSWR('/api/movies', fetcher, options);
  return { data, error, isLoading }
}

export default useMovieList;
