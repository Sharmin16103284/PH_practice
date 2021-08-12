let leapYear = 2021; 

if((leapYear % 4 == 0 || leapYear % 400 == 0) || leapYear % 100 == 0)
{
    console.log('leapyear');
}else{
    console.log('not');
}