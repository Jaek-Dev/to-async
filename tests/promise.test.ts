import { toAsync } from "../src";

test("should return a function", () => {
	const fn = toAsync(() => 1);
	expect(fn).toBeInstanceOf(Function);
});

test("should return a promise", () => {
	const fn = toAsync(() => 1);
	expect(fn()).toBeInstanceOf(Promise);
});

test("should return the correct value", () => {
	const fn = toAsync((boolean: boolean) => boolean);
	fn(false).then((value) => {
		expect(value).toBe(false);
	});
});
