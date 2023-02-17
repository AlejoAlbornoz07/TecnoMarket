
/*funcion personalizada*/

$.validator.addMethod("terminaPor", function(value, element, parametro){

    if(value.endsWith(parametro)){
        return true;
    }

    return false;

}, "Debe terminar por {0}")//{0} seria el parametro

//termina funcion personalizada

$("#formulario_contacto").validate({//llamamos al formualrio, .validate para validar los datos con el json
    rules: {//aqui las reglas
        nombre:{
            required: true,
            minlength: 3,
            maxlength: 30
        },
        email:{
            required: true,
            email: true,
            terminaPor: "hotmail.com"//este seria el parametro de la "funcion personalizada"
        },
        tipoSolicitud:{
            required: true
        },
        mensaje:{
            required: true,
            minlength: 5,
            maxlength: 200
        }
    }
})


$("#guardar").click(function(){//Para llamar el boton por id, y hacer una funcion si se hace un click en el
    if($("#formulario_contacto").valid()==false){//aqui llamamos al formulario por su id, para que cuando se le de al boton guardan salgan los mensajes de las validaciones, si no es valido que retorne
        return;
    }
    let nombre = $("#nombre").val()
    let email = $("#email").val()
    let tipoSolicitud = $("#tipo_solicitud").val()
    let mensaje = $("#mensaje").val()
    let avisos = $("#avisos").is(":checked")
})