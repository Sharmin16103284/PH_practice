var inches = 132;
var feet = inches / 12;
console.log(feet);

function inchToFeet(myInch) {
    var myfeet = myInch / 2;
    return myfeet;
}

var mominch = 500;
var inchToFeetMom = inchToFeet(mominch);

console.log(inchToFeet(222));
console.log(inchToFeetMom);


//  mile to kilometer
function mileToKilo(miles) {
    var kilo = miles * 1.60934 ; 
    return kilo;
}

var marathon = mileToKilo(20);
console.log(marathon);
