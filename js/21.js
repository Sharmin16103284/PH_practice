// 21-2 Remove duplicate items from an array

// remove duplicate
const names = ['rafi' , 'sharmin' , 'rafi' , 'akash', 'bristy' , 'akash'];

function removeDuplicate(names) {
    const unique = [];
   /*  for(let c = 0 ; c<=names.length ; c++)
    {
        const namesElement = names[c];
        console.log(namesElement);
    } */

    // for of loop
    for(const namesElement of names)
    {
        console.log(namesElement);
        if(unique.indexOf(namesElement) == -1)
        {
            unique.push(namesElement);
        }
    }
    return unique;
    
}
console.log(removeDuplicate(names));

// 21-3 

// reverse a string
var intro = "hi, I am sharmin";

function reversString(text) {
    let reversValue = '';
    for(const letter of text)
    {
        console.log(letter);
        // reversValue = reversValue + letter;
        reversValue = letter + reversValue;
    }
    // return reversValue;
    console.log(reversValue);
}
const reversed = reversString(intro);
console.log(reversed);

// 21-4 Handle unexpected function input parameter error
console.log('21-4 Handle unexpected function input parameter');


console.log(intro.length);

// 21-5 Use add and multiplication to calculate wood requirements

console.log('21-5 Use add and multiplication to calculate wood requirements');

function woodCalculator(chairQuantity, tablequantity, bedQuantity) {
    
    if(chairQuantity < 0 || tablequantity<0 || bedQuantity<0)
    {
        return 'negative';
    }

    if(typeof chairQuantity != 'integer' || typeof tablequantity != 'integer' || typeof bedQuantity != 'integer' )
    {
        return 'string';
    }

    
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQty = perChairWood * chairQuantity;
    const tableWoodQty = perTableWood * tablequantity;
    const bedWoodQty = perBedWood * bedQuantity;

    const total = chairWoodQty + tableWoodQty + bedWoodQty;
    return total;
}
const qty = woodCalculator(1,'ddd',-3);
console.log(qty);