export function toAsyncFunction<A = unknown>(fn: (item?: A, ...args: A[]) => any) {
	return function (item?: A, ...args: A[]) {
		try {
			const result = fn(item, ...args);
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
