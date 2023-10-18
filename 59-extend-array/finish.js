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
    // sum(){
    //     this.
    // }
    onlyNumbers(){
        return this.forEach((element)=>{
            const myArr=[]
            if(typeof element == 'number'){
                myArr.push(element)
            }
            return myArr
        })
    }
}
const newA = new ExtendedArray(1,2,3,4,6,'dd',7)
console.log(newA.onlyNumbers())