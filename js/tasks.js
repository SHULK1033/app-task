let url = 'http://127.0.0.1:1337';

function getstatus(){
    let estados;
    let route = '/estados';
    let token = localStorage.getItem("token");

    estados = document.getElementById('estado');

    fetch(url + route, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            "Authorization" : "Bearer "+ token

        }

    })
    .then(res => console.log(res))

}
window.onload = this.getstatus();