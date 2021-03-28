# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## Development

### Mock Data

umi has provided mock function, we can use it refer to https://umijs.org/zh-CN/docs/mock

### Request Method

We provided two methods to initiate a http request

- use src/utils/request
This method we use `umi-request` and add some `interceptors` to suite our json data and handle errors.

- use ahook's useRequest hook
`ahook` is a library from `alibaba`， you can find more details from https://ahooks.js.org/zh-CN/hooks/async

### demo

We provided two demo pages to show how to interact with backend.
You can visit /hooks-page to find development method without dva.

You also can visit /model-page to find development method with dva.

MIT License

Copyright (c) 2021 Rihua

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
