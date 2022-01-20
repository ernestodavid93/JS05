// Exercise #1
// You have a list of names: var names = ["Maria", "Antony", "Joy", "Juan"]


// Part 1
// Write a function to insert a name to the end of the list. Add your own name to the end of the list.
var names = ["Maria", "Antony", "Joy", "Juan"];


function nombre(names){
    names.push("Ernesto");
    console.log(names.indexOf());
}

//nombre(names);


// Part 2
// Write a function that takes in a name and checks if the list has that name. It should return back a boolean - true/false.

function aver(names, nombre){

//Primera opcion
    
    if (names.indexOf(nombre) === -1) {
        console.log(false);
    } else if (names.indexOf(nombre) > -1) {
        console.log(true);
    }

    //O segunda opcion
    // console.log(names.includes('Ricky'));
    
}

aver(names, 'Joy');


// Part 3
// Write a function that takes in a list of names. This function should compare the list taken into the names list you currently have. The function should pass back an array with the names that are in both lists.
var names2 = ["Maria", "Antony", "Joy", "Ernesto"];

function dame(names, names2){
        var encuentra = false;
    for(var i =0; i < names.length;i++){
        encuentra = false;
        for(var j =0; j < names2.length;j++){
            if(names[i] == names2[j]){
                encuentra = true;
                console.log(names[i]);
                break;
            }
        }
        if(!encuentra){
        alert("los arreglos no son iguales");
        break;
        }
    }
    if(encuentra){
        alert("si son iguales");
    }
}

dame(names, names2);


// Part 4
// Write a function that takes in a list of names and returns a list of Integers with the length of the names in the same order as received. Hint use the push function

// Exercise #2
// What do the following expressions evaluate to?

// false || (true && false);
// true || (11 + 12);
// (31 + 22) || true;
// true && (1 + 7);
// false && (3 + 4);
// (1 + 2) && true;
// (32 * 4) >= 129;
// false !== !true;
// true === 4;
// false === (847 === '847');
// false === (887 == '887');
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;

// Exercise #3
// Write a function that logs whether a number is between 0 and 25 (inclusive), between 26 and 100 (inclusive), greater than 100, or less than 0.

// numberRange(25);   // '25 is between 0 and 25'
// numberRange(75);   // '75 is between 26 and 100'
// numberRange(125);  // '125 is greater than 100'
// numberRange(-25);  // '-25 is less than 0'


// Additional Exercises
// What is shown on the console when f is console.log'd?

// var a;
// var b = null;
// var c = undefined;
// var d = 4;
// var e = 'five';
// var f = a || b || c || d || e;

// console.log(f);