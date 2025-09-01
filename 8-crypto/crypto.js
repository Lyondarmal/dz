/* crypto(‘password’) -> ssapdorw

check(‘ssapdorw’, ‘password’) -> true

check(‘ssapdorw’, ‘wrong’) -> false */

const password = 'abcdefg';

function swapChars(str) {
  return str[1] + str[6] + str[2] + str[4] + str[3] + str[0] + str[5];
}

function unswapChars(str) {
  return str[5] + str[0] + str[2] + str[4] + str[3] + str[6] + str[1];
}
const password2 = unswapChars(swapChars(password));

if(password === password2) {
    console.log('true') 
} else {
    console.log('false')
}