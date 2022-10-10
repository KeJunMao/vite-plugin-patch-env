import type { Plugin, UserConfig } from "vite";

export type EnvName = RegExp | string;

export interface Options {
  names?: EnvName | EnvName[];
}
let config: UserConfig = undefined!;

const VitePluginPatchEnv = (options?: Options): Plugin => {
  return {
    name: "vite-plugin-patch-env",
    config(_config) {
      config = _config;
      const env = { ...process.env };
      const setAll = !options;
      let envPrefix = config.envPrefix ?? ["VITE_"];
      if (typeof envPrefix === "string") {
        envPrefix = [envPrefix];
      }
      const notViteEnvName = Object.keys(env).filter((name) => {
        return !(envPrefix as string[]).some((prefix) =>
          name.startsWith(prefix)
        );
      });
      if (setAll) {
        notViteEnvName.forEach((name) => {
          const prefix = envPrefix[0];
          process.env[`${prefix}${name}`] = env[name];
        });
      } else {
        const names = Array.isArray(options.names)
          ? options.names
          : [options.names ? options.names : ""];
        const matchEnvName = notViteEnvName.filter((name) => {
          return names.some((reg) => new RegExp(reg).test(name));
        });
        matchEnvName.forEach((name) => {
          const prefix = envPrefix[0];
          process.env[`${prefix}${name}`] = env[name];
        });
      }
    },
  };
};
export default VitePluginPatchEnv;
