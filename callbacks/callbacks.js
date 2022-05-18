// beispiel für ein Callback in Higher Functions 

const square = function(number){
    return number ** 2;
}
// fn ist eine Funktion als Parameter 
// square funktion wird übergegeben,
// um beliebige Operationen durchzuführen
const processArray = function(items, fn) 
{
    const result = [] 
    for(let i = 0; i < items.length; i++)
    {
        const item = items[i]

        result.push(fn(item))
    }

    return result
}

const numbers = [1,2,3,4,5]
const squares = processArray(numbers, num=> num**2)

console.log(squares)
const words = ["the", "quick", "brown", "fox"]
const wordLengths = processArray(words, w => ({word: w, length: w.length}))
console.log(wordLengths)


// Callback beispiele

const add = function(right, left, callback){
    const sum = right + left;
    callback(sum)
}

add(33,22, sum=>{
    console.log(sum)
})

  
