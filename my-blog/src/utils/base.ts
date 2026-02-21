/** Base path for GitHub Pages (e.g. /HR/) or / for local dev. Always ends with / for safe concatenation. */
export const base = (() => {
  const b = import.meta.env.BASE_URL;
  return b.endsWith('/') ? b : b + '/';
})();
