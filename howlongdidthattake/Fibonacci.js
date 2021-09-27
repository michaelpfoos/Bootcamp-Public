// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
//rFib(20); //0.053 seconds
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
//iFib(20); //0.051 seconds

//My guess would be that the recursive would be faster in most cases because it only runs 3 times where as the loop has to iterate 20 times in this case.  
//However my computer ran the iterative a little quicker so I'm really not sure.  
//I read this article https://betterprogramming.pub/fibonacci-algorithm-in-javascript-45743f3a0ff6
//This explains that recursive algortiihm's need to re-calculate all previous values each time so even though it seems like it only had to run 3 times it actually had to calculate more values then the iteraiton.  


