
var findNumbers = function (nums){
    let contEven = 0;
     nums.forEach((num) => {
         if (num.toString().length % 2 === 0){
             contEven += 1;
         }
     })
    return contEven;
}

let result = findNumbers([12,345,2,6,7896]);

var divResultado = document.querySelector('[data-result]');
var inputResultado = document.createElement('label');
inputResultado.innerText = result.toString();
divResultado.append(inputResultado);
console.log(inputResultado.innerText);