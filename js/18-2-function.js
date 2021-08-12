// function declaration

function startFan(){
    console.log('turn on the fan');
}

// calling the function
startFan();


// 18-3

function buyFood(taka) {
    console.log('singarar taka ', taka);
    var singaraPrice = 10;
    var singaraQuantity = taka/singaraPrice;
    console.log(singaraQuantity , ' gula singara')
    return singaraQuantity;
}
var money = 250;
buyFood(money);

// 18-4

function addNumbers(num1, num2) {
    console.log(num1 , num2);
    var total = num1+num2;
    console.log(total);
    console.log('multiplication ' , num1*num2);
    return total;
}

addNumbers(20 , 30);

var fNumber = 40;
var lNumber = 60;
addNumbers(fNumber , lNumber);


// 18-5 objects
var student = {
    id: 16103284,
    name: 'sharmin sultana',
    marks: 96
}

var mobile = {
    color: 'black',
    price: 20000,
    storage: '16gb'
}


// 18-6 get set object property
var mobile = {
    color: 'black',
    price: 20000,
    storage: '16gb'
}

mobile.price = 30000;
mobile['color'] = 'pink';

var storageNew = 'storage';
mobile[storageNew] = '512gb';
console.log(mobile.price , mobile.color , mobile.storage);


// 18-8 break continue
// while loop
var i = 0;
while(i<10) {
    console.log(i);

    if(i == 5) {
        break;
    }

    i++;
}

console.log("for j");

// for loop
var j = 0;
for(j=0 ; j<20 ; j++) {
    console.log(j);
    if(j>10) {
        break;
    }
}

console.log('array');

var numbers = [1,2,3,4,5,6,7,8,9];
for(var num = 0; num <= numbers.length; num++)
{
    var number = numbers[num];
    console.log(number);

    if(number>6)
    {
        break;
    }
}

// continue
console.log('continue');
var numTwo;
for( numtwo = 0; numTwo < numbers.length; numTwo++)
{
    var numberTwo = numbers[numTwo];
    if(numberTwo > 4){
        continue;
    }
    console.log(numberTwo);
}