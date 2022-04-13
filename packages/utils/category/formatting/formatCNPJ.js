function formatCNPJ(toValue) {
  let value = toValue;
  if (value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{12})(\d)/, '$1-$2');
    value = value.replace(/^(\d{8})(\d)/, '$1/$2');
    value = value.replace(/^(\d{5})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    return value;
  }
  return null;
}

module.exports = formatCNPJ;
