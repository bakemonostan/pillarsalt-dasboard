export const capitalizeFirst = (arg: string) => {
  const formattedWord = arg.charAt(0).toUpperCase() + arg.slice(1);
  return formattedWord;
};
