<img src="./assets/logo.svg" alt="logo of vite-plugin-patch-env repository" width="100" height="100" align="right" />

# vite-plugin-patch-env

> 此插件用于将从系统中的环境变量注入到 Vite 中

[English](./README.md) | 简体中文

## 安装

```
pnpm i -D vite-plugin-patch-env
```

## 使用

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

查看 [例子](./examples/)

## 选项

```ts
export type EnvName = RegExp | string;

export interface Options {
  names?: EnvName | EnvName[];
}
```

使用 `names` 来过滤环境变量, 默认注入所有环境变量
