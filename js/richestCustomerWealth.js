
var maximumWealth = function(accounts) {
    let arrayMaximumWealth = [];
    accounts.forEach((cliente) => {
        let soma = 0;
        cliente.forEach((account) => {
            soma += account;
        })
        arrayMaximumWealth.push(soma);
    })
    function findMax(arr){
        let max = arr[0];
        for (let i = 1; i < arr.length; i++){
            if (arr[i] > max){
                max = arr[i]
            }
        }
        return max;
    }

    return findMax(arrayMaximumWealth);
};

let result = maximumWealth([[1,2,3],[3,2,1]]);

var divResultado = document.querySelector('[data-result]');
var inputResultado = document.createElement('label');
inputResultado.innerText = result.toString();
divResultado.append(inputResultado);
console.log(divResultado)