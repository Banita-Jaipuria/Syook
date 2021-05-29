function intTo4digitsString(nb) {
  if (nb > 0 && nb < 10) return '000' + nb;
  else if (nb >= 10 && nb < 100) return '00' + nb;
  else if (nb >= 100 && nb < 1000) return '0' + nb;
}

const getRandomString = (length) => {
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
};

module.exports = {
  intTo4digitsString,
  getRandomString,
};
