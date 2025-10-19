export type Callable = (...args: any[]) => any;
export type AsyncCallable<T extends Callable> = (
	...args: Parameters<T>
) => Promise<Awaited<ReturnType<T>>>;

export function toAsync<Fn extends Callable>(fn: Fn) {
	return async (...args: Parameters<Fn>) => {
		const result = fn(...args);
		return result instanceof Promise ? result : Promise.resolve(result);
	};
}
