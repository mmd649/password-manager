
const generateButton = document.getElementById("generateButton");
const generatedPasswordArea = document.getElementById("generatedPassword");

const
    upperCases  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowerCases  = 'abcdefghijklmnopqrstuvwxyz',
    numbers     = '0123456789',
    symbols     = '!"£$%^&*()-_=+@';



generateButton.addEventListener("click", function () {

    const hasUpperCase = document.getElementById("upperCase").checked;
    const hasLowerCase = document.getElementById("lowerCase").checked;
    const hasNumbers = document.getElementById("numbers").checked;
    const hasSymbols = document.getElementById("symbols").checked;
    const passwordLength = document.getElementById("passwordLength").value;

    let generatedPassword = "";
    let passwordParameters = 0;

    /*
        For every parameters(uppercase, lowercase, numbers or symbols), add 1 to the current value of passwordParameters.
     */
    if(hasUpperCase)
        passwordParameters+=1;

    if(hasLowerCase)
        passwordParameters+=1;

    if(hasNumbers)
        passwordParameters+=1;

    if(hasSymbols)
        passwordParameters+=1;


    //Only 1 parameter is selected
    if(passwordParameters === 1){

        /*
            Check which one of the parameters is selected.
            In this case there is only 4 possible combination. It going to be either only uppercase, lowercase, numbers or symbols.
            Run a loop based on the password length selected by the user.
            In each iteration, concatenate a randomly chosen character to the variable called generatedPassword.
            The char is decided using a built in function which rolls a number between 0 to 1 and then multiplying it by the password length.
            Math.floor is then use to round down the number, discarding the decimal values.
            chartAt() will be use to select the character in the defined constant above which are upperCases, lowerCases, numbers and symbols.
         */
        if(hasUpperCase){
            for(let x = 0; x < passwordLength; x++){
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
            }
        }
        else if(hasLowerCase){
            for(let x = 0; x < passwordLength; x++){
                generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
            }
        }
        else if(hasNumbers){
            for(let x = 0; x < passwordLength; x++){
                generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }
        }
        else if(hasSymbols){
            for(let x = 0; x < passwordLength; x++){
                generatedPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
            }
        }
    }

    //Any 2 parameters selected
    else if(passwordParameters === 2){

        /*
            When 2 parameters are selected, there are a total of 6 different combinations. nCr = n! / (r! * (n-r)!) Its important that the correct
            number of combination is calculated so that no if statement checks are missed out which may cause runtime error. 
         */

        let rem = passwordLength % passwordParameters;

        if(hasUpperCase && hasLowerCase){

            for(let x = 0; x < (Math.floor(passwordLength / passwordParameters)); x++){
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
                generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
            }

            if(rem === 1)
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
        }

        else if(hasUpperCase && hasNumbers){

            for(let x = 0; x < (Math.floor(passwordLength / passwordParameters)); x++){
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
                generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }

            if(rem === 1)
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
        }

        else if(hasUpperCase && hasSymbols){

            for(let x = 0; x < (Math.floor(passwordLength / passwordParameters)); x++){
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
                generatedPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
            }

            if(rem === 1)
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
        }

        else if(hasLowerCase && hasNumbers){

            for(let x = 0; x < (Math.floor(passwordLength / passwordParameters)); x++){
                generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
                generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }

            if(rem === 1)
                generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
        }

        else if(hasLowerCase && hasSymbols){

            for(let x = 0; x < (Math.floor(passwordLength / passwordParameters)); x++){
                generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
                generatedPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
            }

            if(rem === 1)
                generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
        }

        else if(hasNumbers && hasSymbols){

            for(let x = 0; x < (Math.floor(passwordLength / passwordParameters)); x++){
                generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
                generatedPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
            }

            if(rem === 1)
                generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }

    }

    //Any 3 parameters selected
    else if(passwordParameters === 3){

        let rem = passwordLength % passwordParameters;

        if(hasUpperCase && hasLowerCase && hasNumbers){

            for(let x = 0; x < (Math.floor(passwordLength / passwordParameters)); x++){
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
                generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
                generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }

            if(rem === 1)
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));

            if(rem === 2){
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
                generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
            }

        }

        else if(hasUpperCase && hasLowerCase && hasSymbols){
            for(let x = 0; x < (Math.floor(passwordLength / passwordParameters)); x++){
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
                generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
                generatedPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
            }

            if(rem === 1)
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));

            if(rem === 2){
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
                generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
            }
        }

        else if(hasUpperCase && hasNumbers && hasSymbols){
            for(let x = 0; x < (Math.floor(passwordLength / passwordParameters)); x++){
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
                generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
                generatedPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
            }

            if(rem === 1)
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));

            if(rem === 2){
                generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
                generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }
        }

        else if(hasLowerCase && hasNumbers && hasSymbols){
            for(let x = 0; x < (Math.floor(passwordLength / passwordParameters)); x++){
                generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
                generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
                generatedPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
            }

            if(rem === 1)
                generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));

            if(rem === 2){
                generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
                generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }
        }

    }

    //All parameters selected
    else if(passwordParameters === 4){

        let rem = passwordLength % passwordParameters;

        for(let x = 0; x < (Math.floor(passwordLength / passwordParameters)); x++){

            generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
            generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
            generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
            generatedPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));

        }

        if(rem === 1)
            generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));

        if(rem === 2){
            generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
            generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
        }

        if(rem === 3){
            generatedPassword += upperCases.charAt(Math.floor(Math.random() * upperCases.length));
            generatedPassword += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
            generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }

    }

    generatedPasswordArea.value = generatedPassword;
});

