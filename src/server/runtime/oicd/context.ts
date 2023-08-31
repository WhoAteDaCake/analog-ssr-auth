import {ModuleOptions} from "./types";


export const useOicdRuntimeConfig = (): ModuleOptions => {
  return useRuntimeConfig().openidConnect as ModuleOptions
}
