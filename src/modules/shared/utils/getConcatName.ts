export const getConcatName = (name: string): string | null => {
  if (!name) return null;
  return name.replace(' ', '+');
};
