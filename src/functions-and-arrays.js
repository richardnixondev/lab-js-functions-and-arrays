// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    let bigNumber;
    if (num1 > num2){
        return num1;
    }else if (num2 > num1){
        return num2;
    }else if (num1 === num2){
        return num1, num2;
    }else{
        console.log("not found");
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if (arr.length === 0){
        return null;
    };
    return arr.reduce((longest, word) =>
        word.length > longest.length ? word : longest, "");
};




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr1) {
    if (arr1.length === 0) { 
        return 0;
    }

    let sumNumb = 0;
    for (let i = 0; i < arr1.length; i++) {
        sumNumb += arr1[i]; 
    }

    return sumNumb;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(med) {
    if (med.length === 0){
        return 0;}
    let sumMed = 0;
    for (let i = 0; i < med.length; i++) {
      sumMed += med[i];
    }
    let medFinal = sumMed / med.length;
    return medFinal;
}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr2, wordSearch) {
    let result = arr2.filter((e) => e.startsWith(wordSearch));
    if (arr2.length == []){
        return null;
    } else if (result.length > 0){
        return true;
    } else if (result.length == 0) {
        return false;
    } else {
        console.log("no conditions met")
    }
}
