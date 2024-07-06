export function toAsyncFunction<A = unknown>(fn: (...args: A[]) => any) {
	return function (...args: A[]) {
		try {
			const result = fn(...args);
			if (result instanceof Promise) {
				return result;
			} else {
				return Promise.resolve(result);
			}
		} catch (error) {
			return Promise.reject(error);
		}
	};
}
