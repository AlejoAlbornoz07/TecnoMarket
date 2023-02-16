
//en javascript llamamos a los elementos por el id
let menu = document.getElementById("menu")/*con let 'nombre' hacemos una refeerencia al menu*/
let header = document.getElementById("header")
let nav = document.getElementById("nav")

menu.addEventListener("click", function(){/*con esto evento de click y que haga una funcion*/

    if(header.style.height == "90px" || header.offsetHeight == 90){/**/
        header.style.height = 90 + nav.offsetHeight + "px"
    } else{
        header.style.height = "90px"
    }    
})

window.addEventListener("resize", function(){

    let ancho = document.documentElement.clientWidth
    
    if(ancho>480){
        header.style = ""
    }
})