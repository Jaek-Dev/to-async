export type Callable = (...args: any[]) => any;
export type AsyncCallable<T extends Callable> = (
	...args: Parameters<T>
) => Promise<Awaited<ReturnType<T>>>;

export function toAsync<Fn extends Callable>(fn: Fn): AsyncCallable<Fn> {
	return async (...args: Parameters<Fn>) => {
		const result = fn(...args);
		return result instanceof Promise ? result : Promise.resolve(result);
	};
}

export function toAsyncFunction<T extends Callable>(
	fn: Parameters<typeof toAsync<T>>[0]
): ReturnType<typeof toAsync<T>> {
	return toAsync<T>(fn);
}
