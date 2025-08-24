let age = Number(prompt('Введи свой возраст: '));
const isDrunk = true;
const hasLicence = true;

console.log(`Может ли вести машину? ${(hasLicence && age >= 18 && !isDrunk) ? 'может' : 'не может'}`);
