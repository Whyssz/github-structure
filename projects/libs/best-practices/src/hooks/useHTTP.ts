/* or fetch =0
import { useEffect, useState } from 'react';

export const useFetch = url => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		try {
			const fetchData = async () => {
				const res = await fetch(url);
				const data = await res.json();

				setData(data);
			};

			fetchData();
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	}, [url]);

	return { data, isLoading, error };
};

*/
export const useHttp = () => {
  const request = async (url: string) => {
    try {
      const { data } = await axios.get(url);

      return data;
    } catch (e) {
      throw e;
    }
  };

  return { request };

  /* if there are a lot of value
    return useMemo(
      () => ({
        request,
        isLoading,
        seearchTerm,
      }),
      [request, isLoading]
    );
 */
}