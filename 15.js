//Инструкция if...else
//Ветвления используются для выполнения различного кода в зависимсти от условия. Принцип работы простой - результат выражения в условии блока if приводится к булю true или false.
//
//if (условие) {
//  // тело if
//} else {
//  // тело else
//}
//Если условие приводится к true, то выполняется код в фигурных скобках тела if, а блок else игнорируется.
//
//let cost;
//const subscription = 'pro';
//
//if (subscription === 'pro') {
//  cost = 100;
//} else {
//  cost = 0;
//}
//
//console.log(cost); // 100
//Если условие приводится к false, код блока if будет пропущен, и выполнится код в фигурных скобках после блока else.
//
//let cost;
//const subscription = 'free';
//
//if (subscription === 'pro') {
//  cost = 100;
//} else {
//  cost = 0;
//}
//
//console.log(cost); // 0
//Задание
//Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.
//
//Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка 'Вы совершеннолетний человек'.
//В противном случае должен выполняться блок else и записывается строка 'Вы не совершеннолетний человек'.
//Тесты
//Объявлена функция checkAge(age).
//В выражении проверки возраста использован оператор >=.
//Вызов checkAge(20) возвращает 'Вы совершеннолетний человек'.
//Вызов checkAge(8) возвращает 'Вы не совершеннолетний человек'.
//Вызов checkAge(14) возвращает 'Вы не совершеннолетний человек'.
//Вызов checkAge(38) возвращает 'Вы совершеннолетний человек'.
function checkAge(age) {
  let message;

  if (age >= 18) { // Дополни эту строку
    message = 'Вы совершеннолетний человек';
  } else {
    message = 'Вы не совершеннолетний человек';
  }

  return message;
}