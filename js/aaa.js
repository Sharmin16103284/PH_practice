// problem one
// convert from seer to mon
function seerToMon(seer) {
// error validation for negative number
if(seer<0)
{
return 'please input a valid number';
}
// error validation for numbers that will produce float result
if(seer%40 != 0)
{
return 'please input number which is vidisible by 40';
}
// error validation for numbers that will produce float result
if(typeof seer != 'number')
{
return 'please insert a number ';
}
// main calculation of converting seer to mon
let mon = seer / 40;
return mon;
}
let resultInMon = seerToMon(240);
console.log(resultInMon);
// problem 2
// total sale
function totalSales(shirtQuantity, pantquantity, shoeQuantity) {
// error validation
// for negative value
if(shirtQuantity < 0 || pantquantity<0 || shoeQuantity<0)
{
return 'insert a positive value';
}
// for string value
if(typeof shirtQuantity != 'number' || typeof pantquantity != 'number' || typeof shoeQuantity != 'number' )
{
return 'insert a number';
}
// variable declaration
const shirtPrice = 100;
const pantPrice = 200;
const shoePrice = 500;
// multiplication
const shirtAmout = shirtPrice * shirtQuantity;
const pantAmout = pantPrice * pantquantity;
const showAmount = shoePrice * shoeQuantity;
// addition
const total = shirtAmout + pantAmout + showAmount;
return total;
}
const quantity = totalSales(1,2,1);
console.log(quantity);
// problem 3
// delivery cost
function deliveryCost(tshirtQuantity)
{
// variable for delivery cost
var tshirtPriceFor100 = 100;
var tshirtPriceFor200 = 80;
var tshirtPrice = 50;
// conditions
if(tshirtQuantity>=1 && tshirtQuantity<=100)
{
total = tshirtPriceFor100 * tshirtQuantity;
// console.log(total);
return total;
}
else if(tshirtQuantity>=101 && tshirtQuantity<=200)
{
var deliveryCostOfFirst100 = 100 * tshirtPriceFor100;
var quantityAfter100 = tshirtQuantity - 100;
var drliveryCostFor200 = tshirtPriceFor200 * quantityAfter100;
var total = drliveryCostFor200 + deliveryCostOfFirst100;
// console.log(total);
return total;
}
else if(tshirtQuantity>=201)
{
var deliveryCostBetween100To200 = 100 * tshirtPriceFor200 ;
var deliveryCostBetween1To200 = deliveryCostBetween100To200 + 100*100;
var quantityAfter200 = tshirtQuantity - 200;
var drliveryCost = tshirtPrice * quantityAfter200;
total = deliveryCostBetween1To200 + drliveryCost;
// console.log(total);
return total;
// start error validation
}else {
return "incorrect data type";
}
//end error validation
}
console.log(deliveryCost(700));
// problem 4
// perfect friend
function perfectFriend() {
let friend = 0;
for(const name of friendName)
{
if(name.length == 5)
{
friend = name;
break;
}
// start error validation
else if(!name.length)
{
return 'No records to process';
}
//end error validation
}
return friend;
}
// var friendName = [4,5];
var friendName = ['shathi ','mim', 'pinky' , 'poli', 'bithi'];
var result = perfectFriend(friendName);
console.log(result);