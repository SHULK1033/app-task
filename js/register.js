let url = 'http://127.0.0.1:1337';

function register() {
  let route = '/users';

  fetch(url + route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'username': 'Luis',
      'email': 'Luis@luis.com',
      'password': '1234567',
      'confirmed': 'true',
    }),
  })
  .catch(err => {
      console.log(err)
  });
}

