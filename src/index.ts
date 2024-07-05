export function toAsyncFunction<T = any>(fn: (...args: T[]) => any, ...args: T[]) {
	return function () {
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
