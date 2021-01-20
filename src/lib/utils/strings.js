export const toTitle = (string) =>
  string.replace(/\b\S/g, (t) => t.toUpperCase());
