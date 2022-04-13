/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
function formatDate(value, type) {
  if (value) {
    let originalValue = value;
    value = value.split(' ')[0];
    value = value.replace('-', '/');
    value = value.replace('-', '/');
    let year = value.split('/')[0];
    let month = value.split('/')[1];
    let day = value.split('/')[2];
    if (type === 'hour') {
      value = originalValue;
      value = value.split(' ')[1];
      let hour = value.split(':')[0];
      let minutes = value.split(':')[1];
      return `${day}/${month}/${year} às ${hour}:${minutes}`;
    }
    return `${day}/${month}/${year}`;
  }
  return '-';
}
module.exports = formatDate;
