export type Fn<Args> = (...args: Args[]) => any;
export function toAsyncFunction<A = unknown>(fn: Fn<A>) {
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
