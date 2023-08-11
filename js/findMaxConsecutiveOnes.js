import initFindMax from "./modules/findMax";

var findMaxConsecutiveOnes = function(nums) {
    let maxLength = [];
    let maxNumber = 0;

    for (let i = 0; i < nums.length; i++ ){
        if (nums[i] === 1){
            maxNumber += 1;
        }else{
            maxLength.push(maxNumber);
            maxNumber = 0;
        }

        if (i === nums.length - 1){
            maxLength.push(maxNumber);
        }
    }

    return initFindMax(maxLength);
};

let result = findMaxConsecutiveOnes([1,1,0,1,1,1])

var divResultado = document.querySelector('[data-result]');
var inputResultado = document.createElement('label');
inputResultado.innerText = result.toString();
divResultado.append(inputResultado);
console.log(divResultado)