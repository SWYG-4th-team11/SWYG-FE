const calculateDaysSince = (startDateString: string) => {
  const startDate = new Date(startDateString);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - startDate.getTime();
  const dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  return dayDifference;
};

export default calculateDaysSince;
