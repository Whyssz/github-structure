import { useEffect, useRef, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number): T => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};

function useThrottle<T>(value: T, interval = 500): T {
	const [throttledValue, setThrottledValue] = useState<T>(value);
	const lastExecuted = useRef<number>(Date.now());

	useEffect(() => {
		if (Date.now() >= lastExecuted.current + interval) {
			lastExecuted.current = Date.now();
			setThrottledValue(value);
		} else {
			const timerId = setTimeout(() => {
				lastExecuted.current = Date.now();
				setThrottledValue(value);
			}, interval);

			return () => clearTimeout(timerId);
		}
	}, [value, interval]);

	return throttledValue;
}
