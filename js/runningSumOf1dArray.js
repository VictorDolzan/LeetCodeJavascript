//1º challenge Running Sum of 1d Array
var runningSum = function(nums) {
    let results = [];
    results[0] = nums[0];

    for (let i = 1; i < nums.length; i ++){
        results[i] = nums[i] + results[i - 1];
    }
    console.log(results)
    return results;
};

var result = runningSum([1, 2, 3, 4]);

var divResultado = document.querySelector('[data-result]');
var inputResultado = document.createElement('label');
inputResultado.innerText = result.toString();
divResultado.append(inputResultado);
console.log(divResultado)