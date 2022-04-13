function formatClearTicket(toValue) {
  let value = toValue;
  if (value) {
    value = value.replace(/[^\w\s]/gi, '');
    value = value.replace(/ /gi, '');
    return value;
  }
  return null;
}

module.exports = formatClearTicket;
