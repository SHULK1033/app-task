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
    .then((res) => {
      if (res.ok) {
        alert('Login exitoso')
        return res.json()
      } else {
        alert('Login Fallido')
      }
    })
    .then((data) => token = data);

  localStorage.setItem('key', token.jwt);
  localStorage.setItem('id', token.user.id);
  window.location.href='/principal.html'

}

function boton() {
  let form = document.getElementById('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  })
}

window.onload = this.boton();