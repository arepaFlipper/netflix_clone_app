import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useBillboard = () => {
  const options = { revalidateIfStale: false, revalidateOnFocus: false, revalidateOnReconnect: false };
  const { data, error, isLoading } = useSWR('/api/random', fetcher, options)
  return { data, error, isLoading }
}

export default useBillboard;
