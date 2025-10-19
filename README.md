# sync-to-async

[![npm version](https://badge.fury.io/js/sync-to-async.svg)](https://badge.fury.io/js/sync-to-async)
[![Build Status](https://travis-ci.org/yourusername/to-async.svg?branch=main)](https://travis-ci.org/jaek-dev/sync-to-async)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`sync-to-async` is a lightweight JavaScript package that converts synchronous functions into asynchronous functions. This is particularly useful for testing, simulating delays, or modernizing legacy code that uses synchronous operations.

## Installation

You can install the package via npm:

```bash
npm install sync-to-async
```

Or via yarn:

```bash
yarn add sync-to-async
```

## Usage

### Basic Example

Here's a simple example of how to convert a synchronous function to an asynchronous function using `sync-to-async`:

```ts
import { toAsync } from "sync-to-async";

const asyncMultiply = toAsync(syncMultiply);
function syncMultiply(x: number) {
	return x * 2;
}

asyncMultiply(10).then((result) => {
	console.log(result); // Output: 20
});
```

## API

`toAsync(fn)`
`fn` (Function): The synchronous function to be converted to asynchronous.
Returns a new function that returns a Promise.

## License

This project is licensed under the MIT License - see the [LICENSE file](LICENSE.md) for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, feature requests, or improvements.

## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or HackerNews? Spread the word!

Don't forget to follow me on [X (Formerly Twitter)](https://x.com/Jaek_Dev)! and also follow me on [LinkedIn](https://www.linkedin.com/in/Jaek-Dev)!

Thanks! Jacob Eke.
