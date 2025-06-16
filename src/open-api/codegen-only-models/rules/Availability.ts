export const availabilityRule = (data): boolean => {
  const { localDateTimeStart, localDateTimeEnd } = data;

  return !(!localDateTimeStart || !localDateTimeEnd);
};
