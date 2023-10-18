/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {

    sum(){
       return this.reduce((element,res)=>
            element + res
        )
    }
    onlyNumbers(){
        const res = this.filter(element =>typeof element === 'number')
        return res.reduce((element,res)=>element+res)
    }
}
const newA = new ExtendedArray(1,2,3,4,6,'dd',7)
console.log(newA.sum())
console.log(newA.onlyNumbers())
const sec = new ExtendedArray(1,34,6,56,4,'d',76,5)
console.log(sec.sum())
console.log(sec.onlyNumbers())
console.log(sec.forEach(element=>console.log(element)))
console.log(sec.map(element=>typeof element === 'number'))