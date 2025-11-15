// /src/utils/useDesign.ts
import { getDesignValue } from "./getDesignValue";

/**
* Returns the design value by path, with optional fallback.
* Uses site.json first, then defaultDesign.
*/
export function useDesign(path: string, fallback?: any) {
 const value = getDesignValue(path);
  if (value === undefined || value === null || value === "") {
    return fallback;
  }
  return value;
}
