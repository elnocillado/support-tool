import type { InstapayPayment } from './types';

export function filterByDateRangeAndSearch(
  data: InstapayPayment[],
  startDate: string,
  endDate: string,
  searchTerm: string
) {
  const start = startDate ? new Date(startDate) : null;
  const end = endDate ? new Date(endDate) : null;

  return data.filter(item => {
    const itemDate = new Date(item.transactionDateTime);

    const isWithinDateRange =
      (!start || itemDate >= start) && 
      (!end || itemDate <= end);

    const matchesSearchTerm = item.instructionID.toLowerCase().includes(searchTerm.toLowerCase());

    return isWithinDateRange && matchesSearchTerm;
  });
}

