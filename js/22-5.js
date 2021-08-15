// 22_5-1 Understand recursion is nothing but a simple for loop

let sum = 0;
for(let i = 1; i<=6 ; i++)
{
    console.log(i);
    sum = sum + i;
}

console.log(sum);

// decrement

for(let j = 6; j>=1 ; j--)
{
    console.log(j);
    sum = sum + j;
}


// using function
function sum2(j) {
    
    if(j==1)
    {
        return 1;
    }
    return sum2(j-1) + j;
}
console.log(sum2(6));

// 22_5-2 Explore Factorial Recursion using a for loop concept
 console.log('22_5-2 Explore Factorial Recursion using a for loop');


//  factorial
//  6! = 6*5*4*3*2*1

let fact = 1; //1 because we are multiplying 
for(let k = 6 ; k>= 1; k--)
{
    console.log(k);
    fact = fact * k;
}
console.log(fact);

// fatorial using function
function factorial(n){
    if(n == 1)
    {
        return 1;
    }
    return n * factorial(n-1);
}

console.log('factorial');
console.log(factorial(6));


// 22_5-3 Fibonacci element using recursion and recursion concept

console.log('22_5-3 Fibonacci element using recursion and recursion concept');

// fibonacci
const fibo = [0,1];
for(let l = 2 ; l<=6 ; l++)
{
    fibo[l] = fibo[l-1] + fibo[l-2];
} 
console.log(fibo); //array
console.log(fibo.indexOf(3)); //location of 3 in array is 4


// using recursion /function
function fibonacci(m) {
    if(m == 0)
    {
        return 0;
    }
    if(m == 1 )
    {
        return 1;
    }

    return fibonacci(m-1) + fibonacci(m-2); //function nite hobe
}
console.log(fibonacci(6)); //6no position a 8 ache


// 22_5-4 (advanced) Find the matching product by searching products

console.log('22_5-4 (advanced) Find the matching product by searching products');

const products = [
    {name: 'samsung phone' , price: 12000 },
    {name: 'asus laptop' , price: 32000},
    {name: 'apple phone' , price: 80000 },
    {name: 'lg tv' , price: 5000},
    {name: 'watch' , price: 8000 },
    {name: 'fruit' , price: 350}
];

function searchproducts(products , searchText){
    const matched = [];
    for(const product of products)
    {
        
        // console.log(product); //for whole function
        // console.log(product.name); //for values of name

        
        // if(product.name.indexOf('s') != -1) //shows all product name containing s letter
        // {
        //     console.log(product.name);
        // }
        if(product.name.indexOf(searchText) != -1) 
        {
            matched.push(product);
        }
    }
    return matched;
}

const matched = searchproducts(products , 'phone');
console.log(matched);


// 22_5-5 Explore break and continue for selecting some products

console.log('22_5-5 Explore break and continue for selecting some products');

const productsTwo = [
    {names: 'samsung phone' , prices: 12000 },
    {names: 'asus laptop' , prices: 32000},
    {names: 'apple phone' , prices: 80000 },
    {names: 'lg tv' , prices: 5000},
    {names: 'watch' , prices: 8000 },
    {names: 'fruit' , prices: 350}
];

for(const productSingle of productsTwo)
{
    if(productSingle.prices < 1000)
    {
        break; //stops loop if the condition is true
    }
    console.log(productSingle);

    
    // continue
    if(productSingle.names == 'fruit')
    {
        continue;
    }
    console.log(productSingle);
}