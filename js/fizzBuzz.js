var fizzBuzz = function(n) {
    let array = [];
    for (let cont = 1; cont <= n; cont++){
        let divisibleByThree = cont % 3 === 0;
        let divisibleByFive = cont % 5 === 0;

        if (divisibleByThree && divisibleByFive){
            array.push("FizzBuzz")
        }else if(divisibleByThree){
            array.push("Fizz")
        }else if(divisibleByFive){
            array.push("Buzz")
        }else{
            array.push(cont.toString());
        }
    }

    return array;
};

let result = fizzBuzz(5);

var divResultado = document.querySelector('[data-result]');
var inputResultado = document.createElement('label');
inputResultado.innerText = result.toString();
divResultado.append(inputResultado);
console.log(divResultado)