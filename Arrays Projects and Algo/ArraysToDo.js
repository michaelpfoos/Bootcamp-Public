//Push Front  
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(pushFrontArr, valueToAdd) {    

    let pushFrontCopy = [];
    pushFrontCopy[0] = valueToAdd;
    
    for (let i=1;i<=pushFrontArr.length;i++) {    
        pushFrontCopy[i] = pushFrontArr[i-1];        
    }
    
    pushFrontArr = pushFrontCopy;  
    return pushFrontArr;
}

//arr = pushFront(['5', '6', '7', '100', '101'], '4');
//console.log(arr);


//Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr) {
    for (let i=arr.length-1;i>0;i--) {
        arr.pop();                
    }
    return arr[0]
}

// var num = popFront(['1','2','3','4']);
// console.log(num);

// Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
const arr = ['0','1','2','3','4'];
const index = 2;

const RemoveAt = (arr, index) => {
    //Get the return
    returnValue = arr[index];

    //copy the array.
    copyArr = [];
    for (let i=0;i<arr.length;i++) {
        copyArr[i] = arr[i];
    }  

    //chop the array off at the index.
    for (let i = arr.length;i>index;i--) {
        arr.pop();                
    }     

    //repair the index
    for (let i = index+1; i<copyArr.length;i++) {
        arr[i-1] = copyArr[i];     
    }

    return arr;

}


