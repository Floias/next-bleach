import dayjs from 'dayjs';

const dayCurrent = 187;
const totalDays = 399;
const dayDate = '2025-02-15';

export const calculatesDate = (num: number) => {
  if (num >= dayCurrent) {
    const delta = num - dayCurrent;
    return dayjs(dayDate).add(delta, 'day').format('DD-MM-YYYY');
  }
  const delta = totalDays + num - dayCurrent;
  return dayjs(dayDate).add(delta, 'day').format('DD-MM-YYYY');
}
