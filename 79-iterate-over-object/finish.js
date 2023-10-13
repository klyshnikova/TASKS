/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

function sumObjectValues(obj){

let len = Object.keys(obj).length
let val = Object.values(obj)
  let result = 0
    for(i = 0;i<=len;i++){
      if(typeof val[i]!= 'number')
      i++
      else
        result=val[i] + result
    }
    return result
}

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
