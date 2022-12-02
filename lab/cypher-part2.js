// convert letters to numbers 

const cypher = (str) => {
    str.split('')
    let arr = ["a", "b", "c", "x", "y", "z", "d", "e", "f", "u", "v",
     "w", "g", "h", "i", "r", "s","t", "j", "k", "l", "p", "q", "m","n", "o"]

    for (i = 0; i < arr.length; i++) 
    {
         for (j = 0; j < str.length; j++) 
        {

            if (str[j] === arr[i]) {
             let newNum = String(i)
             newNum += `${j * 2}`
             console.log(newNum)
             }
         }
    }
 
}

cypher('abc')
cypher('hello')

//This cipher isn't too complex. Basically what this cipher does, is it takes a number from the array abouve, 
//which honestly the order of the letters in the array could be anything. 
//and it compares it to the string sent in, and matches the values they have
//in common. then it tacks on a number at the end to show the order of the lettering.
//and simply multiplies j by two to make it less obvious that's what's happening. 

//to decipher you would need to order all numbers abouve two characters from 
//least to greatest. then you would simply use the array to figure out where each letter
//is in the array.
