const showPassword = document.getElementById('show-password-button');

showPassword.addEventListener('click', ()=>{
    const togglePassword = document.getElementById('password-area');
    if(togglePassword.type === 'password'){
        togglePassword.type = 'text';
    } else {
        togglePassword.type = 'password';
    }
});
