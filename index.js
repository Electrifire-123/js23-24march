console.log("Learning JavaScript")
//--------- Global Execution Context -------
// creation phase
// Execution phase
// var name = 2;

// function operation(a,b,c){
//     let result1 = a + b;
//     let result2 = result1 + c;
//     return result2;
// }

// var finalResult = operation(3,4,5);
// console.log(finalResult);

//--------- Variables---------------
var value = 34; // here we are storing a number
var value2 = 34.5 //here its a float but its 
firstName = "Rahul"; //this is a string type
//string - string inscludes char, letters , also numbers with the double inverted commas/single inverted commas.

firstName1 = "sharad";
salary = "12345";
hello = "Hey are you \"Sharads\" sis?";
let address = "432, MG Road, Akola - 444004"; //char, letter, numbers.
// console.log(address);
// console.log(hello);

//Boolean:- Its takes only two values, true (only small letters)or false ()

let adult = true;
let child = false;

//let,var,const

//---let variable---

//1- create a vaiable;
//2 = Initialize a variable with a value;

let a = "sharad";// first assignment: option2 create and initialize a value at the same time.
// let a = "shiv"; //we cannot have vaiable with same name
a = "ravi"; //reassigned: "this is reassign and not redeclare"
// console.log(a);

//---const---

//1. creation and initialization has to be done on the same line itself, we cannot assign values to const in later value
// 2. We cannot reassign the value and variables name should be unique.
const b = 23; // we cannot reassign the values;
// console.log(b);

//---var---

var c;// creating a variable and then initiaze at later lines
var c = "rahul";// create and initialize a variable in same line
var c = "sarang"; //reassign the value
// console.log(c);

//undefined is when you create a variable and you not assigned a value
// not defined is when you have not defined the variable.


// datatype Null
let e = null;// null is assigned to a variable when u ar not sure waht the value it will have initially
// console.log(e);
e = "rahul yadav";//rassign the correct values
// console.log(e);


//----Global Scope-----

let myName = "Rahul";
const myAge = 24;
var isHuman = true; 
// console.log(myName);
// console.log(myAge);
// console.log(isHuman);
 {
    // console.log(myName);
    // console.log(myAge);
    // console.log(isHuman);
}
// console.log(myName);
// console.log(myAge);
// console.log(isHuman);

//----Block Scope----

{
    let myLastName = "Yadav";
    const letters = "5";
    var isSurname = true;
    // console.log(myLastName);
    // console.log(letters);
    // console.log(isSurname);
}
// console.log(myLastName);
// console.log(letters);
// console.log(isSurname);

//-----Hoisting-----
//var keyword variables will have default value as undefined if we try to access the variable even before declation;
console.log(yourAge);
var yourAge;
yourAge = 24;
console.log(yourAge);

//Let keyword donot get memory in global space but lies in Temporal Dead Zone(TDZ); Javascript MDN
// console.log(yourHobby)//Cannot access 'yourHobby' before initialization
let yourHobby;
yourHobby = "coding";
console.log(yourHobby);

//const keyword donot get memory in global space but lies in Temporal Dead Zone(TDZ); Javascript MDN
// console.log(yourPassion)//Cannot access 'yourHobby' before initialization
// const yourHobby;
yourHobby = "coding";
console.log(yourHobby);

// for variables declared with let and const inside the block scope, they are able to access their values, but if we try
// to access these let and const outside their scope, it will throw us reference type error

//but for var variable, since these var are hoisted, they have access to their values even outside the scope.
//notdefined/ uncaught reference error,


//var keyword variables will havedefault value as undefined if we try to access the variable even before declaring;
// console.log(myAge);//undefined
// var myAge;
// myAge = 25;
// console.log(myAge);//25

// let keyword donot get memory in global space but lies in Temporal Dead Zone(TDZ);Javascript MDN
// console.log(myPassion);//cannot access 'myPassion' before initialization
// let myPassion;
// myPassion = "Coding";
// console.log(myPassion);//Coding

//const keyword donot get memory in global space but lies in Temporal Dead Zone(TDZ);Javascript MDN
// console.log(myHobby);//cannot access 'myHobby' before initialization
// const myHobby = "Dancing, Skating";
// console.log(myHobby);//Dancing, Skating


//--------function Hoisting-------
//calling the function, we are not storing the value of the function calculated;
//function are hoisted and thats the reason why we can first call the function and then declare them. 
operation(3,5,6);// 

function operation(x,y,z){
    let result3 = x + y;
    let result4 = result3 + z;
    console.log(result4);
}

/*
//https://github.com/sidhantgupta1983/jsday2
// console.log("Working");

// value = 45;//integer type(int/float)
// // data types - NUmber, String, Boolean
// //integer float(NUMber)

// // pure number - A number with no decimal values ex = 1,2,45,3564367;
// //decimal number - A number with decimal values ex = 1.4, 45.50, 

// // int a = 45;
// // float b = 45.5

// number = 45

// //String - String includes characters, letters, also numbers with the double inverted commas/single inverted commas
// names = "\Sharad";//string type
// names1 = "12345";
// hello = "HEy are you Sharad's Sister?";
// important = "Sharad 'How are you?' I hope u are doing great";
// another = 'How are you?';
// let named = "545, GT ROad, HOwrah - 711101"//characters, letters, numbers
// console.log(named);
// let s = "hi all... "+"hope u all"+" doing great.";

// //Boolean - only have two values- 1. true (small letter only) 2. false(small letter only)
// let isAdult = true;
// let junior = false;



// /Whenever we are creating a variable we need to use any of these three keywords
//1. let  2. const  3. var

// methods to create a variable
//variable names should be unique;
//1  = Create a variable;
//2 = Initaialise a variable with a value;
// let a; Option1
let a = "Sharad";//first assignment; Option2 create and initialise a value at the same time.
// console.log(a);
// let a = "Ravi";//we cannot have variables with same names
a = "ravi";//reassigned; "this is reassign and not redeclare"
console.log(a);

//const
//1. creation and initialisation has to be done on the same line itself. We cannot assign values to const in later lines
const b = "Sharad";
// const b = "Radhe";//we cannot have variables with same names
//const we also cannot reassign the values;
console.log(b);

//var keyword
var c;//creating a variable and then initalize at later lines
c = "Radhe";//1st initialization/assigning value
c = "Shyam"  //reassign the value;
console.log(c);
var d = "Shyam";//create and initialize the variable in the same line
console.log(d);

var c = "Krishna";//reusing the variable with the same name

console.log(z);






*/