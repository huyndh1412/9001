import { _ as __vitePreload } from "./preload-helper-c37bd05e.js";

const exportSet = new Set(["Module", "__esModule", "default", "_export_sfc"]);
let moduleMap = {
  "./ToolPortal": () => {
    dynamicLoadingCss(["App-a0715e0a.css"]);
    return __federation_import(
      "./federation_expose_ToolPortal-7e7fba1d.js"
    ).then((module) =>
      Object.keys(module).every((item) => exportSet.has(item))
        ? () => module.default
        : () => module
    );
  },
};
const seen = {};
const dynamicLoadingCss = (cssFilePaths) => {
  const metaUrl = import.meta.url;
  if (typeof metaUrl == "undefined") {
    console.warn(
      'The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".'
    );
    return;
  }
  const curUrl = metaUrl.substring(0, metaUrl.lastIndexOf("remoteEntry.js"));

  cssFilePaths.forEach((cssFilePath) => {
    const href = curUrl + cssFilePath;
    if (href in seen) return;
    seen[href] = true;
    const element = document.head.appendChild(document.createElement("link"));
    element.href = href;
    element.rel = "stylesheet";
  });
};
async function __federation_import(name) {
  return __vitePreload(() => import(name), true ? [] : void 0);
}
const get = (module) => {
  return moduleMap[module]();
};
const init = (shareScope) => {
  globalThis.__federation_shared__ = globalThis.__federation_shared__ || {};
  Object.entries(shareScope).forEach(([key, value]) => {
    const versionKey = Object.keys(value)[0];
    const versionValue = Object.values(value)[0];
    const scope = versionValue.scope || "default";
    globalThis.__federation_shared__[scope] =
      globalThis.__federation_shared__[scope] || {};
    const shared = globalThis.__federation_shared__[scope];
    (shared[key] = shared[key] || {})[versionKey] = versionValue;
  });
};

export { dynamicLoadingCss, get, init };
