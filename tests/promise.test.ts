import { toAsyncFunction } from "../src";

test("should return a function", () => {
	const fn = toAsyncFunction(() => 1);
	expect(fn).toBeInstanceOf(Function);
});

test("should return a promise", () => {
	const fn = toAsyncFunction(() => 1);
	expect(fn()).toBeInstanceOf(Promise);
});

test("should return the correct value", () => {
	const fn = toAsyncFunction((boolean) => boolean);
	fn(false).then((value) => {
		expect(value).toBe(false);
	});
});
