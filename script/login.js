// step-1: add click event handler
document.getElementById('submit-btn').addEventListener('click', function(){
    // step-2: get email from user and use value to get the input field's value
    const userMail = document.getElementById('user-mail').value;
    // step-3: get password similarly to the email
    const userPassoword = document.getElementById('user-password').value;
    // Dangerous: Don't verify mail and password on the client side
    // step-4: verify mail and password

    if(userMail === 'goribPola@takaNai.com' && userPassoword === 'takadao'){
        console.log('Ashol pola');
        window.location.href = 'bank.html';
    }
    else{
        alert('er baap ami na');
    }

})