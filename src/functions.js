function capitalize (word){
    let capIn = word.charAt(0).toUpperCase()
    let letters = word.split(',').map(l => l.slice(1))
    letters.toString()
    return capIn+letters
}




function reverseString(word){
    let array = word.split('') 
    
    return array.reverse().join('')
}




const calculator = (() => {
    const add = (a,b) =>  a + b;
    const  subtract = (a,b) => a - b;
    const divide =  (a,b) => a / b;
    const multiply = (a,b) => a * b;

    return {
        add,
        subtract,
        divide,
        multiply,
      };

    })();

 

function caesarCipher (str){

        var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
       
       var alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
       
       var resultStr = [];
       for(let i=0; i<str.length; i++){
           for(let j =0; j<alphabets.length; j++){
               if(str[i] === alphabets[j]){
               resultStr.push(alphabets13[j]);
               }
           }
       }
       return resultStr.join("");
     };
   

console.log(caesarCipher('URYYB'))


const analyzeArray  = (arr) => { 

    var max = arr[0];
    var min = arr[0];
    var leng = arr.length
    var sum = arr[0];
    var avg = sum/arr.length;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    return  ['max:' + " "+  max, "min:" + " " + min, 'Length:' +  " " + avg,  "length:" + " " + leng]
}
console.log(analyzeArray([1,2,3,5]))



module.exports = { capitalize  , reverseString , calculator , caesarCipher, analyzeArray }