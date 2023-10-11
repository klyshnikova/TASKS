/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Please add an explanation, highlighting parts of your answer that addresses OP\'s issue, and why/how. Code only answers are generally frowned upon on SO . Adding details adds to long term value, and helps future visitors learn, so they can apply this knowledge to their own coding issues. Also, it improves quality of the answer, and hence SO as well. Higher quality answers are upvoted more often, as more users find them of greater use as a resource to refer back to. Consider editing to provide additional info.'

function countVowels(string,vowels){
    i = 0
    j = 0
    res= 0
    len = string.length
        while(i < len){
            while(vowels[j]!= undefined){
                if(str[i] != vowels[j])
                    j++
                else{
                    i++
                    j=0
                    res++
                }
        }
        i++
        j=0
    }
    return res
}
vowelsCount=countVowels(str,vowels)
console.log(vowelsCount)
// 9
