function stringLength(string) {
  if (string.length < 1) {
    throw new Error('String must be at least 1 character long.');
  } else if (string.length > 10) {
    throw new Error('String must be no more than 10 character long.');
  } else {
    return string.length;
  }
  
}

module.exports = stringLength;