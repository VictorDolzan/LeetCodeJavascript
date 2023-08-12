let squareOfSorted = function (nums){
    let arrayNum = [];
    nums.forEach((num) => {
        let squarePow = num * num;
        arrayNum.push(squarePow);
    })
    return arrayNum.sort((a,b) => a - b);
}

let result = squareOfSorted([-4,-1,0,3,10]);

var divResultado = document.querySelector('[data-result]');
var inputResultado = document.createElement('label');
inputResultado.innerText = result.toString();
divResultado.append(inputResultado);
console.log(inputResultado.innerText);