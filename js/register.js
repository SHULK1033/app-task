let url = 'https://task-cms.herokuapp.com/';

function register() {
  let route = '/users';
  let user = "";
  let email =''; 
  let password= '';

  user = document.getElementById ('user').value
  email= document.getElementById ('email').value
  password = document.getElementById('password').value

  fetch(url + route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "username" : user,
      "email" : email,
      "password" : password,
      "confirmed" : 'true'
    }),
  })  

  .catch(err => {
      console.log(err)
  });
}

function boton(){
  let form = document.getElementById ('form')
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
  })
}

window.onload = this.boton();