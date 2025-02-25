import dayjs from 'dayjs';

const totalDays = 399;
const referenceDate = dayjs('2025-02-15');
const referenceDay = 187;

const getCurrentDayOfCycle = () => {
  const currentDate = dayjs();
  const daysDifference = currentDate.diff(referenceDate, 'day');
  const currentDay = (referenceDay + daysDifference) % totalDays;
  return currentDay >= 0 ? currentDay : currentDay + totalDays;
};

export const calculatesDate = (num: number) => {
  const currentDayOfCycle = getCurrentDayOfCycle();
  let delta;

  if (num >= currentDayOfCycle) {
    delta = num - currentDayOfCycle;
  } else {
    delta = totalDays + num - currentDayOfCycle;
  }

  return dayjs().add(delta, 'day').format('DD-MM-YYYY');
};
