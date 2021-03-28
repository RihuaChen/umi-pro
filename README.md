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
