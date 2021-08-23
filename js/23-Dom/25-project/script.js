// <!-- 25-3 Add event listener navigate to another page -->

document.getElementById('loginSubmit').addEventListener('click' , function(){

    // get user email
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    console.log(userEmail);

    // get user password
    const passField = document.getElementById('password');
    const userPassword = passField.value;
    console.log(userPassword);


    // auth
    // not applicable method. just for learning
    if(userEmail == 'sharmin@gmail.com' && userPassword == 'sharmin')
    {
        // console.log('valid user');
        window.location.href = 'banking.html'
    }else{
        console.log('invalid user');
    }
});



// 25-5 Create Deposit and withdraw amount Input Fields
// nothing



