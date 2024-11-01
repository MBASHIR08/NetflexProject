const authSwitch = document.querySelector('#authSwitch');
const switchForm = document.querySelector('#switchForm');
const formTitle = document.querySelector('#form-title');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

let Signin = true;

document.body.addEventListener('click',(e) => {
   e.preventDefault();
if(e.target.id == 'switchForm') {
    Signin =!Signin;
    if(!Signin) {
   authButton.textContent = 'Sign up';
   formTitle.textContent = 'Sign up';
   username.style.display = 'block';
   confirmPassword.style.display = 'block';
    authSwitch.innerHTML =`
    Already have an account ? <a href="#" id='switchForm'>Sign in now</a>
    `; 
    } else {
        authButton.textContent = 'Sign in';
        formTitle.textContent = 'Sign in';
        username.style.display = 'none';
        confirmPassword.style.display = 'none';
         authSwitch.innerHTML =`
         New to Dugflex ? <a href="#" id='switchForm'>Register now</a>
         `; 

    }
}
else {
    return;
}
});


const authButton = document.getElementById('authButton');

authButton.addEventListener('submit',(e)=>{
    e.preventDefault();

    const user = {
        username: Signin ? undefined : username.value,
        email: email.value,
        password: password.value,
        
    }

    localStorage.setItem('users', JSON.stringify(user));
console.log(user)

    if(confirmPassword.value!=password.value){
        alert('Passwords do not match!');
        return;
    }



})

   

