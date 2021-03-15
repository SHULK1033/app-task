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

function createTask() {
    let route = '/tareas';
    let description = '';
    let responsable = '';
    let estimado = '';
    let estado = '';
    let prioridad = '';
    let form = document.getElementById('form')
    let token = localStorage.getItem('key');

    description = document.getElementById('hu').value
    responsable = document.getElementById('user').value
    estimado = document.getElementById('estimacion').value
    estado = document.getElementById('estado').value
    prioridad = document.getElementById('priority').value

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
            'prioridad': prioridad,
            'estado': estado,
        })
    })
        .then(res => {
            if (res.ok) {
                alert('Tarea Creada')
            }
        })
    form.reset()
}

function getTasks() {
    let token = localStorage.getItem('key');
    let route = '/tareas'
    let table = document.getElementById('tablatareas')

    fetch(url + route, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },

    })
        .then(res => res.json())
        .then(data => localStorage.setItem('historia', JSON.stringify(data)))

    row = JSON.parse(localStorage.getItem('historia'))

    for (const index in row) {
        table.insertRow(-1).innerHTML = `
        <td>${row[index].id.slice(row[index].id.length - 4).toUpperCase()}</td>
        <td>${row[index].description}</td>
        <td>${row[index].responsable?.username}</td>
        <td>${row[index].estado?.tipoEstado}</td>
        <td>${row[index].estimado}</td>
        <td>${row[index].prioridad?.Prioridad}</td>
        <td>
            <div class="text-center">
                <div class="btn-group">
                    <button id="modificar" data-bs-target="#exampleModal" data-bs-toggle="modal" onclick="selectRow('${row[index].id}', true)" type="button" class="btn btn-info">Modificar
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                    </button>
                    <button  data-bs-toggle="modal" data-bs-target="#deleteModal" type="button" class="btn btn-danger" onclick="selectRow('${row[index].id}', false)">Eliminar
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path
                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </button>
                </div>
            </div>
        </td>
        `
    }
    setTimeout(() => {
        if (table.rows.length === 1) {
            window.location.reload()
        }
    }, 1200)

}

function getPrioridades() {
    let route = '/prioridads';
    let token = localStorage.getItem('key');
    let options = []
    let prioridad = document.getElementById('priority')

    fetch(url + route, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,

        },
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('prioridad', JSON.stringify(data))
        })

    options = JSON.parse(localStorage.getItem('prioridad'))

    for (const index in options) {
        let option = document.createElement('option')
        option.text = options[index].Prioridad
        option.value = options[index].id
        prioridad.add(option)
    }
}

function selectRow(rowId, edit) {
    let data = JSON.parse(localStorage.getItem('historia'))
    let tarea = data.find(tarea => {
        return tarea._id === rowId
    })

    document.getElementById('hu').value = tarea.description
    document.getElementById('user').value = tarea.responsable.id
    document.getElementById('estimacion').value = tarea.estimado
    document.getElementById('estado').value = tarea?.estado?.id
    document.getElementById('priority').value = tarea?.prioridad?.id

    if (edit) {
        localStorage.setItem("editar", JSON.stringify(tarea));
        ocultar(true);
    } else {
        deleteTask(tarea)
    }
}

function deleteTask(data) {
    let route = "/tareas/"
    let token = localStorage.getItem('key');

    fetch(url + route + data.id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    })
        .then(res => res)
}

function editTask() {
    let data = JSON.parse(localStorage.getItem("editar"));
    let route = '/tareas/';
    let description = '';
    let responsable = '';
    let estimado = '';
    let estado = '';
    let prioridad = '';
    let form = document.getElementById('form')
    let token = localStorage.getItem('key');

    description = document.getElementById('hu').value
    responsable = document.getElementById('user').value
    estimado = document.getElementById('estimacion').value
    estado = document.getElementById('estado').value
    prioridad = document.getElementById('priority').value

    fetch(url + route + data.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
            'description': description,
            'responsable': responsable,
            'estimado': estimado,
            'prioridad': prioridad,
            'estado': estado,
        })
    })
        .then(res => {
            if (res.ok) { }
        })
    form.reset()
    localStorage.removeItem("editar")
}

function ocultar(edit) {
    let boton1;
    let boton2;
    boton1 = document.getElementById("guardar");
    boton2 = document.getElementById("editar");
    if (edit) {
        boton1.classList.add("ocultar");
        boton2.classList.remove("ocultar");
    } else {
        boton2.classList.add("ocultar");
        boton1.classList.remove("ocultar");
    }
}

window.onload = this.getPrioridades();
window.onload = this.getUsers();
window.onload = this.getstatus();
window.onload = this.getTasks();