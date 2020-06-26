/* VARIABLES */

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("txtArea");
const btnSend = document.getElementById("btnSend");
const btnClear = document.getElementById("btnClear");
const sendMsgForm = document.getElementById("sendMsg");
const boxMsgAlert = document.getElementById("boxMsgAlert");
const spinner = document.getElementById("spinner");

/* EVENT LISTENER */

eventListeners();
function eventListeners() {
  //Inicio de aplicación
  document.addEventListener("DOMContentLoaded", startWeb);

  //Campos del formulario
  name.addEventListener("blur", validateField);
  email.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);
  //Botón enviar  en el submit
  sendMsgForm.addEventListener("submit", sendMsg);
  //Botón de reset
  btnClear.addEventListener("click", clearForm);
}

/* FUNCIONES */

//Se ejecuta al Iniciar/Recargar la página
function startWeb() {
  //Desabilito los botones
  btnSend.disabled = true;
  //Desabilito el Spinner
  spinner.style.display = "none";
}

//Validar campos del Formulario
function validateField() {
  //Se valida la longitud del texto y que no esté vacio
  validateLength(this);

  //Validar unicamente el email
  if (this.type === "email") {
    validateEmail(this);
  }

  let mistakes = document.querySelectorAll(".is-invalid");
  if (name.value !== "" && (email.value !== "") & (message.value !== "")) {
    if (mistakes.length === 0) {
      btnSend.disabled = false;
    } else {
      btnSend.disabled = true;
    }
  } else {
    btnSend.disabled = true;
  }
}

//Limpia los campos del Formulario
function clearForm(e) {

  sendMsgForm.reset();
  //Deschequea los inputs
  name.classList.remove("is-valid");
  email.classList.remove("is-valid");
  message.classList.remove("is-valid");
  name.focus();
  e.preventDefault();
}

//Cuando se envía el email
function sendMsg(e) {
  e.preventDefault();
  //Spinner al precionar enviar
  spinner.style.display = "inline-block";
  //Cuadro de texto que informa sobre el gmail
  const sendAlert = document.createElement("div");
  sendAlert.innerHTML = `
                  <h3 class="alert-heading text-dark">Gracias por ponerte en contácto conmigo!</h4>
                  <p class="lead">Desafortunadamente no me llegan los correos por el momento, pero puedes enviarme mensajes por mis redes!</p>
                  <hr>
                  <p class="mb-0 lead">Trataré de solucionar este problema lo antes posible, disculpa las molestias.</p>
                  `;
  sendAlert.classList.add("alert", "alert-warning", "mx-2");
  sendAlert.setAttribute("role", "alert");

  //Desabilito el boton enviar y clear momentaneamente
  btnSend.disabled = true;
  btnClear.disabled = true;
  name.disabled = true;
  email.disabled = true;
  message.disabled = true;
  //Ocultar spinner y muestra el cuadro de alerta
  setTimeout(function () {
    //Ocultamos el spinnerGif
    spinner.style.display = "none";
    btnSend.disabled = false;
    btnClear.disabled = false;
    name.disabled = false;
    email.disabled = false;
    message.disabled = false;
    sendMsgForm.reset();
    name.classList.remove("is-valid");
    email.classList.remove("is-valid");
    message.classList.remove("is-valid");
    //Añadimos el cuadro de texto
    document.getElementById("boxMsgAlert").appendChild(sendAlert);
    //Pasado un tiempo, eliminamos el cuadro de texto y vaciamos el formulario
    setTimeout(function () {
      sendAlert.remove();
    }, 9000);
  }, 2500);
}

//Validar longitud del texto en los campos
function validateLength(campo) {
  //Validación para textArea
  if (campo.value.length > 3) {
    campo.classList.add("is-valid");
    campo.classList.remove("is-invalid");
  } else {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
  }
}

//Validar solo email
function validateEmail(campo) {
  //Pedir ayuda a Desarrollo Util
  const mensaje = campo.value;

  if (mensaje.indexOf("@") !== -1) {
    campo.classList.add("is-valid");
    campo.classList.remove("is-invalid");
  } else {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
  }
}

// Animation Header
window.sr = ScrollReveal();
sr.reveal(".navbar", {
  duration: 2000,
  origin: "bottom",
});
sr.reveal(".header-content-left", {
  duration: 2000,
  origin: "top",
  distance: "300px",
});
sr.reveal(".header-content-right", {
  duration: 2000,
  origin: "bottom",
  distance: "300px",
});

//Smooth Scrolling to Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
