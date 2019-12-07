
function checkIfPasswordMatch(){

    let password = document.getElementById('password-1').value;
    let verifyPassword = document.getElementById('password-2').value;
    let passwordAlert = document.getElementById('verify');

    if(password != verifyPassword){
        passwordAlert.innerText = 'Password does not match.'
    } else {
        passwordAlert.innerHTML = 'Password Matches';
    }
}
