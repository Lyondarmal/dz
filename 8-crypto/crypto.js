/* crypto(‘password’) -> ssapdorw

check(‘ssapdorw’, ‘password’) -> true

check(‘ssapdorw’, ‘wrong’) -> false */

const password = 'abcdefg';


function crypto(password) {
  return password[1] + password[6] + password[2] + password[4] + password[3] + password[0] + password[5];
}

function uncrypto(encrypted) {
  return encrypted[5] + encrypted[0] + encrypted[2] + encrypted[4] + encrypted[3] + encrypted[6] + encrypted[1];
}

function check(original, encrypted) {
  const decrypted = uncrypto(encrypted);
  return original === decrypted;
}