

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

const fibsRec = function(num){
    console.log("This was printed recursively");
    if (num > 2){
    let previousArr = fibsRec(num-1);
    previousArr.push(previousArr[previousArr.length-1]+previousArr[previousArr.length-2]);
    return previousArr;
    } else if (num == 2){
        return [0,1];
    } else if (num == 1){
        return [0];
    } else if (num <= 0){
        return [];
}}

console.log(fibsRec(8));
console.log(fibsRec(1));