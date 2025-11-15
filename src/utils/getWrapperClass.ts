// src/utils/getWrapperClass.ts

import site from "../config/site.json";

/**
* Returns Tailwind classes for the wrapper component
* @param fullWidth - if true, the wrapper is w-full, otherwise max-width from config
* @param extraClass - optional additional classes
* @returns string of classes for the wrapper
*/
export function getWrapperClass(fullWidth?: boolean, extraClass?: string) {
  const baseClass = fullWidth ? "w-full" : site.layout.defaultMaxWidth || "max-w-3xl";
  return [baseClass, extraClass].filter(Boolean).join(" ");
}
