const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerSet = 'abcdefghijklmnopqrstuvwxyz'
const numberSet = '123467890'
const symbolSet = '!@#$%^&*()_+/'

//selectors
const passBox= document.querySelector('#pass-box')
const totalChar= document.querySelector('#total-char')
const upperInput= document.querySelector('#upper-case')
const lowerInput= document.querySelector('#lower-case')
const numberInput = document.querySelector('#numbers')
const symbolInput = document.querySelector('#symbols')
const checkboxes = document.querySelectorAll('.checkboxs')



const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]   
}

const generatePassword =(password = '') =>{
    if (![...checkboxes].some(checkbox => checkbox.checked)) {
        passBox.innerText = 'Select something'
    } else {
         if(upperInput.checked){
        password += getRandomData(upperSet)
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet)
    }
    if(numberInput.checked){
        password += getRandomData(numberSet)
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet)
    }

    // Continue adding random characters until password reaches desired length
    if (password.length < totalChar.value){
        return generatePassword(password)
    }
    
    // Truncate the password to the desired length
    passBox.innerText = truncateString(password,totalChar.value)   
    }

}


document.querySelector('#btn').addEventListener('click',function(){
    generatePassword()
})


function truncateString(str, num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr;
    }else {
        return str;
    }
}







// 2nd method

// const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const lowerSet = 'abcdefghijklmnopqrstuvwxyz';
// const numberSet = '1234567890';
// const symbolSet = '!@#$%^&*()_+/';

// // Selectors
// const passBox = document.querySelector('#pass-box');
// const totalChar = document.querySelector('#total-char');
// const upperInput = document.querySelector('#upper-case');
// const lowerInput = document.querySelector('#lower-case');
// const numberInput = document.querySelector('#numbers');
// const symbolInput = document.querySelector('#symbols');

// const getRandomData = (dataSet) => {
//     return dataSet[Math.floor(Math.random() * dataSet.length)];
// };

// const generatePassword = () => {
//     let password = '';
//     let charSet = '';

//     // Include selected character sets
//     if (upperInput.checked) charSet += upperSet;
//     if (lowerInput.checked) charSet += lowerSet;
//     if (numberInput.checked) charSet += numberSet;
//     if (symbolInput.checked) charSet += symbolSet;

//     // If no option is selected, return an empty password
//     if (charSet.length === 0) {
//         passBox.innerText = 'Please select at least one option';
//         return;
//     }

//     // Generate password of desired length
//     for (let i = 0; i < totalChar.value; i++) {
//         password += getRandomData(charSet);
//     }

//     passBox.innerText = password;
// };

// // Event Listener
// document.querySelector('#btn').addEventListener('click', generatePassword);
