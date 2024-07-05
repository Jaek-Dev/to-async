import { toAsyncFunction } from "../src";

test("adds two numbers correctly", () => {
	const promise = toAsyncFunction(() => false);
	promise().then((value) => {
		expect(value).toBe(false);
	});
});
