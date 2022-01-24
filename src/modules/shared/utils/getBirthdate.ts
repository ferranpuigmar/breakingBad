const getBirthdate = (date: string | undefined) => {
  if (!date) return undefined;
  const splittedDate = date.split('-');
  if (splittedDate.length === 1) return date;

  const [month, day, year] = splittedDate;

  return `${day}/${month}/${year}`;
};

export default getBirthdate;
