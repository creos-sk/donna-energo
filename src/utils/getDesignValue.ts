import site from "../config/site.json";
import navbar from "../config/navbar.json";
import footer from "../config/footer.json";
import { defaultDesign } from "../config/default_design";

/**
* Returns the design value by path (e.g. "navbar.simple.wrapper")
* Order: site.json → site.design → specific config → defaultDesign
*/
export function getDesignValue(path: string): any {
  const keys = path.split(".");
  const root = keys[0];
  const rest = keys.slice(1);

  const getValue = (obj: any, keys: string[]) => {
    let current = obj;
    for (const key of keys) {
      if (current?.[key] !== undefined && current[key] !== "") {
        current = current[key];
      } else {
        return undefined;
      }
    }
    return current;
  };

  // 1️⃣ site.json
  const siteValue = getValue(site, keys);
  if (siteValue !== undefined) return siteValue;

  // 1.5️⃣ site.design
  if (site?.design) {
    const altPath =
      root === "button"
        ? ["buttons", ...rest]
        : [root, ...rest];
    const designValue = getValue(site.design, altPath);
    if (designValue !== undefined) return designValue;
  }

  // 2️⃣ specific config (navbar, footer)
  const configMap: Record<string, any> = { navbar, footer };
  const specific = configMap[root];
  if (specific) {
    const specificValue = getValue(specific, rest);
    if (specificValue !== undefined) return specificValue;
  }

  // 3️⃣ fallback: defaultDesign
  const defaultValue = getValue(defaultDesign, keys);






  return defaultValue;
}
