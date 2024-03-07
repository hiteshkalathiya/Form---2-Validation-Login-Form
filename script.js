
const loginForm = document.getElementById("login");
const signupForm = document.getElementById("signup");


loginForm.addEventListener("submit", validateLoginForm);
signupForm.addEventListener("submit", validateSignupForm);


function validateLoginForm(event) {
  event.preventDefault(); 

  const username = loginForm.querySelector('input[type="text"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  
  if (username.trim() === "") {
    alert("Please enter your username");
    return;
  }

  if (password.trim() === "") {
    alert("Please enter your password");
    return;
  }

 
  alert("Login successful!"); 
}

function validateSignupForm(event) {
  event.preventDefault(); 

  const username = signupForm.querySelector('input[type="text"]').value;
  const email = signupForm.querySelector('input[type="email"]').value;
  const phone = signupForm.querySelector('input[type="number"]').value;
  const password = signupForm.querySelector('input[type="password"]').value;

  
  if (username.trim() === "") {
    alert("Please enter your username");
    return;
  }

  if (email.trim() === "") {
    alert("Please enter your email");
    return;
  }

  if (phone.trim() === "") {
    alert("Please enter your phone number");
    return;
  }

  if (password.trim() === "") {
    alert("Please enter your password");
    return;
  }

  alert("Signup successful!"); 
}
function swithMode(){
    document.body.classList.toggle("active")
  }