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
        method:'GET',
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

function createTask() {
    let route = '/tareas';
    let description = '';
    let responsable = '';
    let estimado = '';
    let estado = '';
    let token = localStorage.getItem('key');

    description = document.getElementById('hu').value
    responsable = document.getElementById('user').value
    estimado = document.getElementById('estimacion').value
    estado = document.getElementById('estado').value

    fetch(url + route, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
            'description': description,
            'responsable': responsable,
            'estimado': estimado,
            'estado': estado,
        })
    }
    ).then (rest=>console.log(rest))

    console.log(estado,responsable)
}

window.onload = this.getUsers();