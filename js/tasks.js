let url = 'https://task-cms.herokuapp.com';

async function getstatus(){
    let estados;
    let route = '/estados';
    let token = localStorage.getItem("key");
    let options =[];

    estados = document.getElementById('estado');

    options = await fetch(url + route, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            "Authorization" : "Bearer "+ token

        }
    })
    .then(res => res.json())
    .then(data => {})
    for(const index in options){
        console.log(options[index]);
        let option = document.createElement("option");
        option.text = options[index].tipoEstado
        option.value = option[index]._id
        estados.add(option)
        console.log(option);
        
    }
}
window.onload = this.getstatus();