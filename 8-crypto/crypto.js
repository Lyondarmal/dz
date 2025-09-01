
const password = 'password'

function crypto(password) {
  return password[7] + password[6] + password[2] + password[0] + password[1] + password[5] + password[4] + password[3];
}
const encrypted = crypto(password);

function uncrypto(encrypted) {
  return encrypted[3] + encrypted[4] + encrypted[2] + encrypted[7] + encrypted[6] + encrypted[5] + encrypted[1] + encrypted[0];
}
const password2 = uncrypto(encrypted);
const password3 = 'passwor';

function check(encrypted, password) {
  return uncrypto(encrypted) === password;
}


