/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]
function sumPositiveNegative(myArray){
    len = myArray.length
    i = 0;
    negative = 0
    positive = 0
    while(i< len){
        if (myArray[i] >= 0){
            positive = myArray[i] + positive
        i++}
        else if (myArray[i] < 0){
            negative = myArray[i] + negative
        i++}
    }
    return{positive,negative}
}
console.log(sumPositiveNegative(nums))
// { positive: 74, negative: -54 }
