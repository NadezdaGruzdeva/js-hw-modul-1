//Математические операторы
//Назначение, функционал и приоритет (порядок) операций ничем не отличаются от школьного курса алгебры. Операторы возвращают значение как результат выражения.
//
//const x = 10;
//const y = 5;
//
//// Сложение
//console.log(x + y); // 15
//
//// Вычитание
//console.log(x - y); // 5
//
//// Умножение
//console.log(x * y); // 50
//
//// Деление
//console.log(x / y); // 2
//Полезно
//Важно запомнить правильное именование составляющих алгебраического выражения: +, -, * и / называются операторами, а то на чём они применяются (числа) - операнды.
//
//Задание
//Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа. Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество едниц товара в заказке.
//
//Тесты
//Объявлена переменная pricePerItem.
//Значение переменной pricePerItem это число 3500.
//Объявлена переменная orderedQuantity.
//Значение переменной orderedQuantity это число 4.
//Объявлена переменная totalPrice.
//Значение переменной totalPrice это число 14000.
//Использован оператор *.
// Базовый код
const pricePerItem = 3500;
const orderedQuantity = 4;

// Пиши код ниже этой строки
const totalPrice = pricePerItem * orderedQuantity;
//console.log(3500 + 4);