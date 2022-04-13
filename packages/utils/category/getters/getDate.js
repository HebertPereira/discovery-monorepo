const getDate = (type) => {
  const data = new Date();

  const day = String(data.getDate()).padStart(2, '0');
  const month = String(data.getMonth() + 1).padStart(2, '0');
  const year = String(data.getFullYear());
  const atDate = `${day}/${month}/${year}`;
  const atTimeHour = String(data.getHours()).padStart(2, '0');
  const atTimeMinute = String(data.getMinutes()).padStart(2, '0');

  switch (type) {
    case 'day':
      return day;
    case 'month':
      return month;
    case 'year':
      return year;
    case 'atDate':
      return atDate;
    case 'atTime':
      return `${atTimeHour}:${atTimeMinute}`;
    default:
      return '-';
  }
};

module.exports = getDate;
