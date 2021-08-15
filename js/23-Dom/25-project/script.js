// <!-- 25-3 Add event listener navigate to another page -->

document.getElementById('loginSubmit').addEventListener('click' , function(){
    // console.log('clicked')

    // get user email
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    console.log(userEmail);

    // get user password
    const passField = document.getElementById('password');
    const userPassword = passField.value;
    console.log(userPassword);


    // auth
    if(userEmail == 'sharmin@gmail.com' && userPassword == 'sharmin')
    {
        // console.log('valid user');
        window.location.href = 'banking.html'
    }else{
        console.log('invalid user');
    }
});



// 25-4 Deposit, withdraw, balance area using grid layout