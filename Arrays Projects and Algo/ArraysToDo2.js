//Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

const arrReverse = ['0', '1', '2', '3', '4', '5', '6', '7'];

const reverse = (arr) => {
    let copy = [];
    let c = 0;
    for (i=arr.length-1;i>=0;i--) {
        copy[c] = arr[i];
        c++
    }
    return copy;
}

// arrReverse2 = reverse(arrReverse);
// console.log(arrReverse2);

//Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.
//length 8
//shift 2 would be ['6', '7', '0', '1', '2', '3', '4', '5'];  index would be 6 or 2 less then the length
//shift -2 would be ['2', '3', '4', '5', '6', '7','0', '1']; index would be 1 or 2-1 more then 0.

const rotate = (arr, shiftBy) => {
    let index;

    if (shiftBy === 0) {
        return arr;
    }
    else if (shiftBy > 0) {
        index = arr.length - shiftBy - 1;        
    }
    else if (shiftBy < 0) {
        index = ((shiftBy * -1) - 1);        
    }
    //Copy the array
    let copy = [];
    for (let i=0;i<arr.length;i++) {
        copy[i] = arr[i];
    }
    
    //Add in everything after the index to generate the base of hte new array.
    arr = [];
    let c = 0;
    for (let i=index + 1;i<copy.length;i++) {
        arr[c] = copy[i];
        c++;    
    }
    
    //Add in everything before the index.
    //for positive, add every value up until the first value off the base from the beginning..    
    if (shiftBy > 0) {
        let c = 0;
        for (let i=shiftBy;i<copy.length;i++) {           
            arr[i] = copy[c];
            c++;
        }       
    }    
    else if (shiftBy < 0) {      
        let threshhold = copy.length-arr.length;        
        let c = arr.length; 
        //I should be left then what is left over. so in thise case you've used 3 off the 8.  so 5 is left over.  
        for (i=0;i<threshhold;i++) { //should be 5.
            arr[c] = copy[i];
            c++
        }
    } 
 
    return arr;
}

const arrRotate = ['0', '1', '2', '3', '4', '5', '6', '7'];
const shiftByRotate = -2;
//const rotateTest = rotate(arrRotate, shiftByRotate);
///console.log(rotateTest);

//Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range.
// Given arr and values min and max, retain only the array values between min and max. 
// Work in-place: return the array you are given, with values in original order. No built-in array functions.

const filterRange = (arr, min, max) => {
    //copy array
    let c = 0;
    let copy = [];
    for (let i=0;i<arr.length;i++) {
        if (arr[i] >= min && arr[i] <= max) {
            copy[c] = arr[i];
            c++
        }
    }
    return copy;
}

const arrFilterRange = ['0', '1', '2', '3', '4', '5', '6', '7'];
const minFilterRange = 0;
const maxFilterRange = 3;

// const testFilterRange = filterRange(arrFilterRange, minFilterRange, maxFilterRange);
// console.log(testFilterRange);


// Concat

// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. 
// Return a new array containing the first array's elements, followed by the second array's elements. 
// Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
const concat = (arr1, arr2) => {
    let newArray = []
    let c = 0;

    for (var i=0;i<arr1.length;i++) {
        newArray[c] = arr1[i];
        c++;
    } 

    for (var i=0;i<arr2.length;i++) {
        newArray[c] = arr2[i];
        c++;
    }  

    return newArray;
}

const concatArr1 = ['0', '1', '2', 'cat'];
const concatArr2 = ['dog', '3', '4', '5', '6'];

// const concatArrTest = concat(concatArr1, concatArr2);
// console.log(concatArrTest);