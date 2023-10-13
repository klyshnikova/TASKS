/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

const a = [1, 2, 3]
const b = [1, 2, 3]

console.log(a === b) // false (Почему?) потому что это ссылки на 2 разных массива

const c = [1, 2, 4]
const d = [1, 2, 3, 4]
function areArraysEqual(firstArray,secondArray){
    i =  0
    j = 0
    lengthFirst = firstArray.length
    lengthSecond = secondArray.length
    if(lengthFirst != lengthSecond)
        return false
    else
            while(i< lengthFirst && j< lengthSecond)
            {
            if(firstArray[i]===secondArray[j]){
                i++
                j++
            }
            else return false
    }
    return true
}
console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false
