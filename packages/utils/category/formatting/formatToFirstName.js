const formatToFirstName = (name) => {
  const firstName = name.split(' ');
  return `${firstName[0]}`;
};

module.exports = formatToFirstName;
