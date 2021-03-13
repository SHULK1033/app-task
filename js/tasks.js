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
    let route = '/users';
    let token = localStorage.getItem('key');
    fetch(url + route, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token, }
    }
    ).then (
        res => {
            res.json();
        }
    ).then(
        data =>{
            console.log(data);
        }
        )
}
window.onload = this.getUsers();