let url = 'http://127.0.0.1:1337';

function login() {
  let router = '/auth/local';
  let token = '';
  let email =''; 
  let password= '';

  email= document.getElementById ('email').value
  password = document.getElementById('password').value

  console.log(email)
  console.log(password) 

  fetch(url + router, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier: 'luis@luis.com',
      password: '1234567',
    }),
  })
    .then((res) => res.json())
    .then((data) => token = data);
}
