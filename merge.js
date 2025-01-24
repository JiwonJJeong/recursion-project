
const mergeSort = function(arr){
    if (arr.length ==1){
        return arr;
    } else{
        const half = (arr.length/2-0.5).toFixed(0); //rounds 2.5 > 2
        const sortedFirstHalf = mergeSort(arr.slice(0,half));
        const sortedSecondHalf = mergeSort(arr.slice(half,arr.length));
        return sortTwoSortedArrays(sortedFirstHalf, sortedSecondHalf);
    }
}

const sortTwoSortedArrays = function(arr1, arr2){
    let index1 = 0;
    let index2 = 0;
    let combinedArr = [];
    let value1 = arr1[index1];
    let value2 = arr2[index2];
    while (index1 < arr1.length && index2 < arr2.length){
        if (value1 < value2){
            combinedArr.push(value1);
            index1++;
            value1 = arr1[index1];
        } else{
            combinedArr.push(value2);
            index2++;
            value2 = arr2[index2];
        }
    }
    if (index1 == arr1.length){
        combinedArr.push(...arr2.slice(index2, arr2.length));
    } else if (index2 == arr2.length){
        combinedArr.push(...arr1.slice(index1, arr1.length));
    }
    return combinedArr;
}

console.log(mergeSort([1,6,3,4,2,6]));


/*
mergeSort([3,2,1,5,6])
    mergeSort([3,2])+mergeSort([1,5,6])
        mergeSort([3])+mergeSort(2) + mergeSort (1,5) + mergeSort(6)
            return 2,3 + mergesort (1) + mergsort (5) + return 6
                return 2 3 + return 1 5 + return 6
                 return 2 3 + return 1 5 6
                    return 1 2 3 5 6

*/