function formatTicket(toValue) {
  let value = toValue;
  if (value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{33})(\d)/, '$1 $2');
    value = value.replace(/^(\d{32})(\d)/, '$1 $2');
    value = value.replace(/^(\d{26})(\d)/, '$1.$2');
    value = value.replace(/^(\d{21})(\d)/, '$1 $2');
    value = value.replace(/^(\d{15})(\d)/, '$1.$2');
    value = value.replace(/^(\d{10})(\d)/, '$1 $2');
    value = value.replace(/^(\d{5})(\d)/, '$1.$2');
    return value;
  }

  return null;
}

module.exports = formatTicket;
