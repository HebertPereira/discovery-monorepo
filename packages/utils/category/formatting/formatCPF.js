function formatCPF(toValue) {
  let value = toValue;
  if (value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{9})(\d)/, '$1-$2');
    value = value.replace(/^(\d{6})(\d)/, '$1.$2');
    value = value.replace(/^(\d{3})(\d)/, '$1.$2');
    return value;
  }
  return null;
}

module.exports = formatCPF;
