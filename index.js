addEventListener('load', main, false)

var key = document.getElementById('key')
var confKey = document.getElementById('confKey')

function main() {
    document.getElementById('send').addEventListener('click', validate, true)
}

//comprueba que el email y las claves estan bien y si no salta una ventada indicando el error de lo que esta mal
function validate() {
    let username = document.getElementById('username')

    console.log(username.value)

    if (validEmail() && validKey() && username.value != '') {
        window.alert('Usuario registrado correctamente')
    } else {
        if (!validEmail()) {
            window.alert('Email no valido')
        }

        if (key.value.length < 8 || confKey.value.length < 8) {
            window.alert('Contraseña debe de tener al menos 8 caracteres')
        } else if (!validKey) {
            window.alert('Contraseña no coincide')
        }

        if (username === ''){
            window.alert('Nombre de usuario requerido')
        }
    }
}

//Confirma que el email conicida con el patron
function validEmail() {
    let email = document.getElementById('email')
    let regEx = /(\d*[A-Z,a-z]*\d*)@(gmail|hotmail|yahoo).(es|com)/

    return email.value.match(regEx)
}

//confirma que las claves sean iguales
function validKey() {
    let valid = false

    if (key.value === '' || confKey === '') {
        valid = false
    } else if (key.value === confKey.value) {
        valid = true

    }

    return valid
}