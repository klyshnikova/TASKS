/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим?
 */

'use strict'//с строгим режимом будет строго соблюдаться зона видимости  
function myFunction() {
  a = 2  //нужно объявить переменную прежде чем присваивать значение
  return a
}

myFunction()
