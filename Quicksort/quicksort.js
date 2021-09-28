const array = [3, 5, 7, 2, 1, 6, 8, 4];

//What I learned:  This is not really my code.  I read the articles referenced and I learned how to do this.  I learned how to create the random pivot from the stack over flow article and I learned 
//how to write the pivot in the latter article using their simple approach.  (not even going to try to mess with the more complicated today, maybe later :).  
//but back to the point,  I learned how their code works and hopefully in the future will be able to pull a similar solution to a similar problem out of my own head.
//1.Get a random value from the array.  
//https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array


//2. Reorder the list so lesser elements are to the left of the pivot and greater elements are to the right of the pivot.
//https://rohan-paul.github.io/javascript/2018/01/11/Quick-Sort_Algorithm-in-JavaScript/
function quickSort(arr, pivot) {

    //This if statement is important for two reasons.  The first is when you get to your smallest or largest number it will return all that is left.  But also because if there is no 
    //clear exit in a function when it calls itself then an infinite loop will be created.
    if (arr.length < 2) {
        return arr;
    }    
    
    //console pivot for debugging
    //console.log(pivot);

    let lessthan = [];
    let greaterthan = [];

    for (var i=0;i<arr.length;i++) {
        if (arr[i] > pivot) {
            greaterthan.push(arr[i]);
        }
        else if (arr[i] < pivot) {
            lessthan.push(arr[i]);
        }
    }   

   let lessthanpivot = lessthan[Math.floor(Math.random()*lessthan.length)]
   let greaterthanpivot = greaterthan[Math.floor(Math.random()*greaterthan.length)]
  

    //3. Repeat steps 1 and on both the smaller and larger list.  
    return quickSort(lessthan, lessthanpivot).concat(pivot, quickSort(greaterthan, greaterthanpivot));
}

var test = quickSort(array, array[Math.floor(Math.random()*array.length)]);

console.log(test);



