/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const myArray=[
    {
        carBrand:'BMW',
        price: 6000,
        isAvailableForSale:true
    },
    {
        carBrand:'Mecedes',
        price: 1030,
        isAvailableForSale:true
    },
    {
        carBrand:'Volkswagen',
        price: 2000,
        isAvailableForSale:true
    }]

myArray.push({carBrand:'Toyota',
price: 3000,
isAvailableForSale:true})
console.log(myArray)