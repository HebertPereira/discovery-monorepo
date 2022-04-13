/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
function formatReverseDate(value) {
  if (value) {
    value = value.split(' ')[0];
    value = value.replace('-', '/');
    value = value.replace('-', '/');
    let year = value.split('/')[0];
    let month = value.split('/')[1];
    let day = value.split('/')[2];
    return `${year}-${month}-${day}`;
  }
  return '-';
}
module.exports = formatReverseDate;
