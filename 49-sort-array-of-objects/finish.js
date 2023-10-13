/** ЗАДАЧА 49 - Сортировка объектов в массиве
 *
 * 1. Создайте функцию "sortProductsByPrice" с одним параметром "products"
 *
 * 2. Эта функция должна отсортировать входной массив товаров
 * по цене каждого товара в порядке возрастания
 * и вернуть отсортированный массив
 *
 * 3. Оригинальный массив должен остаться без изменений
 */

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]

function sortProductsByPrice(products){
    const newArray = [...products]
    const newSecondArray = newArray.reduce((element)=>{
      len = newArray.length
      while(i<len){
        i= 0
        j = 1
        if(newArray[i].price < newArray[j].price){
            obj = newArray[j]
            newArray[j] = newArray[i]
            newArray[i] = obj
            i++
            j++
          }
          else
          {i++
        j++}
        }

    })
    return newSecondArray
}

 const sortedProducts = sortProductsByPrice(inputProducts)

 console.log(sortedProducts) // Массив отсортированных товаров

 console.log(inputProducts) // Оригинальный массив не должен измениться
