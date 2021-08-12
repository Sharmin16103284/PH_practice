// 20-1 math 


// absolute number 
// prints only positive number for both positive and negative values

const myNumber = -5;
const output = Math.abs(myNumber);
console.log(output);

// Math.ceil() -> rounds into grater number. 6.00001 -> 7, 6.999 -> 7



// Math.floor() -> rounds into less number 6.9999 -> 6 , 6.0001 -> 6


// Math.round() -> nearest integer value 6.45 -> 6, 6.77->7



// Math.random() -> returns random numbers betewwn 0 and 1

const random = Math.random() * 10; //random number between 1 to 10

console.log(random);
const rounddOutput = Math.round(random);
console.log(rounddOutput);



console.log("inside for loop");

// inside for loop 
for(let i=0; i<=10; i++)
{
    const randomMumb = Math.random() * 10; 

    console.log(randomMumb);
    const roundNumber = Math.round(random);
    console.log(roundNumber);
}

// 20-2 Swap variable, swap without temp, destructing

console.log('20-2 Swap variable, swap without temp, destructing');

// swap variable
var first = 5;
var second = 7;
console.log(first, second);
// 1st way
var temp = first;
first = second;
second = temp;
console.log(first , second);

// destructuring
var number1 = 3;
var number2 = 8;
console.log(number1 , number2);
[number1 , number2] = [number2 , number1];
console.log(number1 , number2);


// 20-3 Find max of two values, find max of three values
console.log('20-3 Find max of two values, find max of three values');

var one = 50;
var two = 303;
var three = 58;
var max = Math.max(one , two , three);
console.log(max);

// using function

function largerValue(num1 , num2) {
    if(num1>num2)
    {
        return num1;
    } else {
        return num2;
    }
}

const largest = largerValue(40 , 60);
console.log(largest);



//  20-4 Sum of all numbers in an array
console.log('20-4 Sum of all numbers in an array');

/* const arrayOfNumbers = [34 , 56, 44, 65, 57];
 let sum = 0;
 for(let i=0 ; i<= arrayOfNumbers.length ; i++)
{
    const element = arrayOfNumbers[i];
    console.log(element);
    sum = sum + element;
}
return sum;
console.log(sum); */

// 20-5 Find the largest element of an array
console.log('20-5 Find the largest element of an array');

// largest number of an array
function largestElement(numb) {
    let largest = numb[0]; //initial value 1st element of the array
    for(let j=0 ; j<=numb.length ; j++)
    {
        const element = numb[j];
        if(element > largest)
        {
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 34, 65, 70, 499 ,56];
const oldest = largestElement(ages);
const oldestnegative = largestElement([-12 , -4 , -17]);
console.log(oldest);
console.log('negative' , oldestnegative);

// smallest number of an array
function smallestElement(smallNumber){
    let smallElement = smallNumber[0];
    for(let k = 0 ; k<=smallNumber.length ; k++)
    {
        const smallest = smallNumber[k];
        if(smallest < smallElement)
        {
            smallElement = smallest;
        }
    }
    return smallElement;
}

let smallValue = [2,4,7,-8];
let value = smallestElement(smallValue);
console.log(value);


// 20-6 Create a Fibonacci Series using a for loop
console.log('20-6 Create a Fibonacci Series using a for loop');

// using for loop
const series = [0,1];

for(let f=2 ; f<=10 ; f++)
{
    series[f] = series[f-1] + series[f-2];
}
console.log(series);

// using function
/* function fibo(num)
{
    const fiboArray = [0,1]
    for(let g=2 ; g<=num; g++)
    {
        fiboArray[g] = fiboArray[g-1] + fiboArray[g-2];
    }
    return fiboArray;
}
const fibonacci = fibo(11);
console.log(fibonacci); */

// fibonacci with input validation
function fibo(numValue)
{
    // for string 
    if(typeof numValue != 'number')
    {
        return 'input a number';
    }
    // for negative num
    if(numValue < 2) {
        return 'please give number grater than 2';
    }
    const fiboArray = [0,1]
    for(let g=2 ; g<=numValue; g++)
    {
        fiboArray[g] = fiboArray[g-1] + fiboArray[g-2];
    }
    return fiboArray;
}
const fibonacci = fibo(5);
console.log(fibonacci);

// 20-8 (advanced) Fibonacci Element and series Recursive way
console.log('20-8 (advanced) Fibonacci Element and series Recursive way');

// Fibonacci Element
function fibonacciElement(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return fibonacciElement(n-1) + fibonacciElement(n-2);
}
const fiboele = fibonacciElement(6);
console.log(fiboele);

// Fibonacci series Recursive way
