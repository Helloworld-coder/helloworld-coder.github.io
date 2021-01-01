console.log('Best of luck Jana');
console.log("Get start now");
/*
let name = 'janardhanPerumal';

let person1 = {
    name : 'jana',
    location : 'salem',
    mobile : 123
};

console.log(person1);

console.log(person1.mobile);
console.log(person1.location);
console.log('jana');
name = 'laxman'
let who = 'janardhanPerumal';
console.log(who);
console.log(name)
function greet (name) {
    console.log(name);
}

greet('john');
let x=10
let y=3
console.log(x/y)
let z = x+=5;
console.log(z);

//ternary operators
let points = 100
let totalPoints = points > 100 ? 'gold' : 'silver'
    // ? if points > 100 is true = gold
    // : - COLON SYMBOLISE OTHERWISE
    // Condition operators < > always returns a boolean.

console.log(totalPoints);

// logical operators - 11 are used to interpret default values if option was not selected.

//bitwise operatos

    // | - Vertical line - 1
    // & - ampersand - 0

// Swapping values

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// if, else if , else

let hour = 13;

if (hour >=6 && hour < 12)
    console.log('Good Morning');

else if (hour >=12 && hour < 18)
    console.log('Good noon');

else
    console.log('Good evening');

// FOR loops - for in , for of

     // for (inital expression/declaration of a variable ; conditoin evaluates to be true ; incrementexpression)



for (let i = 0; i < 5; i++){
    console.log('jana')
}

    // let (i=0) - declaration/expression of a variabl
    // i > 5 - a condition thats need to met so that the loop repeats
    // i++ - Incrementing the value of the variable so that the loop repeats until the contion is met as defined.

// WHILE loops -  
    // while (condition){statement}
    // vaiable is expressed outside the loop
    
// DO WHILE

// FOR - IN

const person ={
    name: 'jana',
    location: 'salem',
    role: 'engineer'
};

console.log(person['location']);

for ( let key in person)
    console.log(key, person[key]);

const colors = ['red','green','blue'];

for (let variety in colors)
    console.log(variety,colors[variety]);

// FOR - OF
    //STARTING FROM ECMA SCRIPT 6

    //used for listing the value of properties


for (let color of colors)
    console.log(color);

// BREAK AND CONTINUE

// maximum of 2nos
function greater(num1,num2){

if (num1>num2)
    return 'the greater number is '+ num1;
else
    return ' the greater number is ' + num2;
}

function max(num1,num2){
    return (num1>num2) ? 'greater is '+num1 : 'greater is '+num2;
}

console.log(max(5,9));

// landscape or portrait

function isLandscape (width,height){
    return (width>height);
}
console.log(isLandscape(400,200));

// here we are determining whether true or false.
// no need to write the full condtion for true or false.

function isPortrait (width,height){
    return (width<height) ? true : false;
}
console.log(isPortrait(100,200));


// DEMERIT Points

checkSpeed(90);

function checkSpeed(speed){
    let maxSpeed = 70
    let KmPerPoint = 5
    if (speed < maxSpeed + KmPerPoint)
    return 'ok';
    
    let points = Math.floor((speed-maxSpeed)/KmPerPoint);
    if (points >=5)
    console.log('License suspened');
    else
    console.log('points',points)
}

// show numbers



function showNumbers (limit){
    for (i=0; i<=limit; i++ ){
        if (i % 2 === 0) console.log (i,'even');
        else console.log(i,'odd');
    }
    
}

showNumbers(10);

// testing loops

for (let i=5;i<=9;i++){
    console.log('print jana','- you can buddy',i);
}

for (let i=10;i>=(-2);i--){
    if (i%2===0) console.log(i,'even');
    else console.log(i,'odd');
}

function forInLopp(){
    let friends = ['jana','ram','arun','lax'];
    for (friend in friends)
    console.log(friend,friends[friend]);}
    forInLopp();
    
    
    function forOfLoop(){
        let friends = ['jana','ram','arun','lax'];
        for (let friend of friends)
        console.log(friend);
    }
    forOfLoop();

    //for of - cannot iterate an object , only array can be iterated
    
    let test = "print janaa";{
        console.log(test);
    } 
    
    let k =1
    while (k<=4) {
        console.log(k); k++;
    }
    
    let j = 9;
    do {
        if (j%2 !== 0) console.log(j,'even'); 
        j++;
    } while (j <= 6);
    
    // showonly STRING in the given object
    
    const movie = {
        name : 'spectre',
        role : 'james bond',
        signature : 007,
        rating : 10
    };
    
    //for ( data in movie) {console.log(data,movie[data]);}
    
    function showProperties(movie) {
        for ( let a in movie) {
            if (typeof movie[a] === 'number') console.log(a,movie[a]);
        }    
    }
    
    showProperties(movie);
    
    
    // fizzBuzz function
    
    function fizzBuzz(input){
        if (typeof input !== 'number')
        return 'NaN';
        if (input % 3 === 0 && input % 5 === 0)
            return 'FizzBuzz';
        if (input % 3 === 0)
            return 'Fizz';
        if (input % 5 === 0)
            return 'Buzz';
    }
    
    console.log(fizzBuzz('jana'));

    // sum of multiples of 3 and 5

    function sum(limit){
        let sum = 0;

        for (i=0;i<=limit;i++)
            if (i%3==0 || i%5==0)
                sum +=2;
        return sum;
    }
    
    console.log(sum(3));

    // calculate grade as per avg marks of given 3 subjects.

let janaScore = [10,20,30,40];

for (let score of janaScore)
    let totalScore = 0;
    totalScore = score+totalScore
    console.log(score);


// showStars function ( for loop inside for loop)

function showStars (rows){
    for (let row=1; row <=rows; row++) {
        let pattern = ''
        for (let i=0; i<row; i++)
            pattern += '*';
        console.log(pattern);
    }

}
showStars(5);


// nested loops

function isPrime (limit) {
        for (let number=2;number<limit;number++)
            if(limit%number===0)
                return false;
            
        return true;
}

function showPrimes(numbers){
    for (let numm=2;numm<=numbers;numm++)
        if (isPrime(numm)) console.log(numm);
}
 
showPrimes(10);
*/
// objects
    //objects are key value pairs
        //key : value
        // value can be a number, string , function()
    // A function inside an object is called as method or object method
    // we can always create/define an object inside an object

    //objects has 2 functions
        //factory functions 
            //used to return the function
        //constructor functions
            // used to construct a new object using the "this" and "new" as common constructors
            // the first letter of the constructor will be in capital letter.

// Value types and Reference types.
    //Value types - Primitives
        // value types are always copied by their value
            //let x=2
            //let y=x
            //x =4
            //now value of x is 4 not 2.
        // Number
        // Srting
        // Boolean
        // Symbol
        // Undefined
        // null

    // Reference types
        // Reference types are objects copied by reference.
            // let x = {value : 2};
            // let y = x
            // x.value = 20
        // Object
        // Function
        // Array

let number = { num1 : 10};

function increase (number) {
    number.num1++;
}

increase(number);
console.log(number);

// any change to the objects in the reference types always changes the value of the object in all the places defined.


function forInLopp(){
    let friends = ['jana','ram','arun','lax'];
    for (friend in friends)
    console.log(friend,friends[friend]);}
    forInLopp();
    
    
    function forOfLoop(){
        let friends = ['jana','ram','arun','lax'];
        for (let friend of friends)
        console.log(friend);
    }
    forOfLoop();   

// how to copy an object to another object

const circle = {
    radius : 1,
    draw () {
        console.log('jana')
    }
}

console.log();
