const userLanguage = navigator.language.slice(0, 2);
switch (userLanguage) {
    case 'en':
        console.log('Hello!');
        break;
     case 'de':
        console.log('Hallo!');
        break;
     case 'fr':
        console.log('Bonjour!');
        break;
     case 'es':
        console.log('Hola!');
        break;
     case 'ru':
        console.log('Привет!');
        break;
    default:
        console.log('Неизвестный язык');
};

