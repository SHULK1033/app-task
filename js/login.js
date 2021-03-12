let url = 'https://task-cms.herokuapp.com';

async function login() {
  let router = '/auth/local';
  let token = '';
  let email = '';
  let password = '';

  email = document.getElementById('email').value
  password = document.getElementById('password').value

  token = await fetch(url + router, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'identifier': email,
      'password': password,
    }),
  })
    .then((res) => res.json())
    .then((data) => token = data);

  console.log(token);

  localStorage.setItem('key', token.jwt);
  localStorage.setItem('id', token.user.id);

}

function boton() {
  let form = document.getElementById('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  })
}

window.onload = this.boton();