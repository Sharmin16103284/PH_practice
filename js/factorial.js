
let fact = 1;

for (let i=1 ; i<=5 ; i++) 
{
    fact = fact*i;
}
console.log(fact);

//

function factorial(f) {
    let facto = 1;
    for(let j=1 ; j<= f ; j++)
    {
        facto = facto * j;
    }
    return facto;
}

let printFact = factorial(9);
console.log(printFact);



// Factorial using a while loop or a decrementing loop

// while loop

function getFactorial(number) {
    let factvalue = 1;
    let k =1;

    while(k<=number)
    {
        factvalue = factvalue * k;
        k++;
    }
    return factvalue;
}

var factresult = getFactorial(3);
console.log(factresult);

// decrementing loop
function getFact(num) {
    let factNum = 1;
    let l = num;

    while(l>=1) 
    {
        factNum = factNum * l ;
        l--;
    }
    return factNum;
}

console.log(getFact(4));


// Calculate Factorial in a Recursive function
// 7! = 7*6*5*4*3*2*1
// =7*6!
// n = n * (n-1)
function factRecursive(numb) {
    if(numb== 1)
    {
        return 1;
    }
    return numb * factRecursive(numb-1);
}

const myFact = factRecursive(7);
console.log(myFact);