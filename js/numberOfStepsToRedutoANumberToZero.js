var numberOfSteps = function(num) {
    let steps = 0;
    for (let cont = 0; num > 0; cont ++){
        if (num % 2 === 0){
            num /= 2;
        }else{
            num -= 1;
        }
        steps ++;
    }

    return steps;
};

const result = numberOfSteps(14);

var divResultado = document.querySelector('[data-result]');
var inputResultado = document.createElement('label');
inputResultado.innerText = result.toString();
divResultado.append(inputResultado);
console.log(divResultado)