

// iteratively takes num and returns array containing that many numbers of Fibonacci sequence
const fibs = function(num){
    let fibonacciArr = [];
    let previousTerm = 1;
    let secondPreviousTerm = 0;

    if (num > 0){
        fibonacciArr.push(secondPreviousTerm);
        num--;
    }
    if (num>0){
        fibonacciArr.push(previousTerm);
        num--;
    }
    while (num > 0){
        const newTerm = previousTerm + secondPreviousTerm;
        fibonacciArr.push(newTerm);
        secondPreviousTerm = previousTerm;
        previousTerm = newTerm;
        num--;
    }
    return fibonacciArr;
};

console.log(fibs(8));
console.log(fibs(12));
