let url = 'https://task-cms.herokuapp.com';

function getstatus() {
    let estados;
    let route = '/estados';
    let token = localStorage.getItem('key');
    let options = [];

    estados = document.getElementById('estado');

    fetch(url + route, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem('estados', JSON.stringify(data));
        });

    options = JSON.parse(localStorage.getItem('estados'));

    for (const index in options) {
        let option = document.createElement('option');
        option.text = options[index].tipoEstado;
        option.value = options[index]._id;
        estados.add(option);
    }
}

window.onload = this.getstatus();

function createTask() {

}

function getUsers() {
    let users = [];
    let usersSelected = document.getElementById('user')
    let route = '/users';
    let token = localStorage.getItem('key');
    fetch(url + route, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('users', JSON.stringify(data));
        })

    users = JSON.parse(localStorage.getItem('users'));

    for (const index in users) {
        let option = document.createElement('option')
        option.text = users[index].username
        option.value = users[index].id
        usersSelected.add(option)
    }
}

window.onload = this.getUsers();