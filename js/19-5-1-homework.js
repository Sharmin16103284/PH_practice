// celsius to fahrenheit 
function celToFehr(celsius) {
    let fahrenheit = (9/5 * celsius) + 32;
    return fahrenheit;
}
let convertedIntoFahr = celToFehr(78);
console.log(convertedIntoFahr);

// fahrenheit to celsius
function fehrToCel(fehr) {
    let cel = 5/9 * (fehr - 32);
    return cel; 
}

console.log(fehrToCel(78));


// grading 
function grading(mark) {
    if(mark >= 90 && mark <=100)
    {
        console.log('A');
    } else if(mark>=80)
    {
        console.log('B');
    } else if(mark>=70)
    {
        console.log('C');
    }else
    {
        console.log('F');
    }

    return mark;
}

grading(49);