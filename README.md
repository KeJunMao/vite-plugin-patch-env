<img src="./assets/logo.svg" alt="logo of vite-plugin-patch-env repository" width="100" height="100" align="right" />

# vite-plugin-patch-env

> This plugin is used to patch environment variables from the system into Vite

English | [简体中文](./README.zh-CN.md)

## Installation

```
pnpm i -D vite-plugin-patch-env
```

## Usage

```ts
// vite.config.ts
import { defineConfig } from "vite";
import PathEnv from "vite-plugin-patch-env";

export default defineConfig({
  plugins: [PathEnv()],
});
```

```bash
> env
...
HOME=/Users/kejun
...
```

```ts
console.log(import.meta.env);
// output
// {
//   //...
//   VITE_HOME: "/Users/kejun"
//   //...
// }
```

see [example](./examples/)

## Options

```ts
export type EnvName = RegExp | string;

export interface Options {
  names?: EnvName | EnvName[];
}
```

use `names` to filter env, default patch all env
