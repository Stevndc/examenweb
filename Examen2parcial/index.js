//Hacemos el llamado de nuestro datos por medio de la Id
function guardar() {
    letcedula = document.getElementById("cedula").value;
    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;

    //validamos datos 
    if (cedula.length == 0 || nombres.length == 0 || apellidos.length == 0 || direccion.length == 0 || telefono.length == 0) {


        alert("Por Favor llenar todos los campos");


    }
    //hacemos el llamado de los datos para guardarlo como archivos JSON
    else {
        let datos = {
            'cedula': cedula,
            'nombres': nombres,
            'apellidos': apellidos,
            'direccion': direccion,
            'telefono': telefono
        };
        localStorage.setItem('usuario', JSON.stringify(datos));

    }

}