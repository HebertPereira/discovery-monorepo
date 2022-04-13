function formatShortName(value) {
  try {
    const name = value.split(' ');
    const lastName = name.length - 1;
    if (lastName === 1) return `${name[0]} ${name[1]}`;
    return `${name[0]} ${name[1]} ${name[lastName]}`;
  } catch {
    return null;
  }
}

module.exports = formatShortName;
