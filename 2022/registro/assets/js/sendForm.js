const formNombre = document.getElementById('fname');
const formApellido = document.getElementById('lname');
const formTipoDocumento = document.getElementById('identidad');
const formNumDocumento = document.getElementById('numidentidad');
const formEmail = document.getElementById('email');
const formEmpresa = document.getElementById('empresa');
const formCanal = document.getElementById('canal');
const formConsentimiento = document.getElementById('consentimiento');
const btnReservar = document.getElementById('reservar');
const modalRegistro = document.getElementById('modalRegistroBG');

const sendForm = async () => {

    if ((formConsentimiento.checked) && (formNombre.value) && (formApellido.value) && (formEmail.value) && (formEmpresa.value) && (formCanal.value != "Escoge un canal")) {

        const formObject = {
            eventName: "form_registro",
            email: formEmail.value,
            attributes:{
                nombre: formNombre.value,
                apellidos: formApellido.value,
                tipoDocumento: formTipoDocumento.value,
                numDocumento: formNumDocumento.value,
                empresa: formEmpresa.value,
                canal: formCanal.value
            }
        }
    
        // Autenticacion de API
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Basic MGZlNDBhYzljODIyNDU4YWE2ZjRlZGE5NmFjMTBjMGU=");
    
        let raw = JSON.stringify(formObject);
    
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };
    
        let sendResponse = await fetch("https://track.embluemail.com/contacts/event", requestOptions);
        let sendResponseJSON = await sendResponse.json();
        if (sendResponseJSON.result == "Event Tracked.") {
            modalRegistro.style.display = "flex";
            // window.location.href = window.location.pathname + "registro/";
        } else {
            alert("Error al enviar formulario");
        }
        //console.log(sendResponseJSON);

    } else {
        alert("Rellena los espacios requeridos.");
    }
}

modalRegistro.addEventListener("click",()=>{
    modalRegistro.style.display = "none";
});