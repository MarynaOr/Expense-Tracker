export const getStartedDate = (
  period: 'day' | 'week' | 'month' | 'year',
): Date => {
  const date = new Date();

  switch (period) {
    case 'week':
      date.setDate(date.getDate() - 7);
      break;
    case 'month':
      date.setMonth(date.getMonth() - 1);
      break;
    case 'year':
      date.setFullYear(date.getFullYear() - 1);
      break;
    default:
      date.setDate(date.getDate() - 1);
  }

  return date;
};
