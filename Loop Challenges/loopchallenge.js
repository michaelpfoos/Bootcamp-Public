function print1through20() {
    for (var i=1;i<21;i++) {
        console.log(i);
    }
}

function decreasemult3() {
    for (var i=100;i>=0;i--) {
        if (i % 3 === 0 && i / 3 > 0) {
            console.log(i);
        }
    }
}

function printthesequence() {
    let seq = [4, 2.5, 1, -0.5, -2, -3.25];

    for (var i=0;i<seq.length;i++) {
        console.log(seq[i]);
    }
}

function sigma() {
    var sum = 0;

    for (var i=0;i<101;i++) {
        sum = sum + i;
    }

    console.log(sum);
}

function factoral() {
    var x = 1;

    for (i=1;i<13;i++) {
        x = x * i;        
    }

    console.log(x);
}

//Log values 1-20
//print1through20();

//Decreasing multipes of 3
//decreasemult3();

//Print the sequence
//printthesequence();

//run the signma function
//sigma();

//run the factoral challenge
//factoral();

