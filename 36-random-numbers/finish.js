/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1000
const MAX = 9999

function randomas(min,max){
    let randomNum = Math.floor(Math.random(MIN,MAX)* MAX)
    return randomNum
}

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

res = randomas(MIN,MAX)
    if(myNumbers.some(element=>element === res)){
        randomas(MIN,MAX)
    }
    else
    myNumbers.push(res)
console.log(res)
console.log(myNumbers)