var ServeResponse = document.querySelector('#response')

document.forms.signupForm.onsubmit = function(e) {
    e.preventDefault();
    var userInput = document.forms.signupForm.name.value + " " + document.forms.signupForm.login.value + " " + document.forms.signupForm.password.value;
    userInput = encodeURIComponent(userInput);
    var xhr = new XMLHttpRequest();
    console.log(userInput)
    xhr.open('POST', 'signupForm.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('signupForm=' + userInput)
};