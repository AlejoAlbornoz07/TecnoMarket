
//en javascript llamamos a los elementos por el id
let menu = document.getElementById("menu")/*con let 'nombre' hacemos una refeerencia al menu*/
let header = document.getElementById("header")
let nav = document.getElementById("nav")

menu.addEventListener("click", function(){/*con esto evento de click y que haga una funcion*/

    if(header.style.height == "90px" || header.offsetHeight == 90){/*ahora teniendo lo de la linea siguiente, entonces si la altura del header es 90 entonces que haga lo siguiente, sino que lo deje en 90px*/
                                      /*despues del O es porque luego de recarga la pagina se pierde la animacion porque queda sumada y acumulada la altura entonces ya no es 90px, por ello se pone el header.offsetHeight == 90*/  
        header.style.height = 90 + nav.offsetHeight + "px"/*cuando se haga click el header crecera, pero no se utiliza auto porque no permite hacer una animacion, entonces se utiliza un calculo en este caso es 90+nav.offserHeight que es el alto del display actual mas la palabra px*/
    } else{
        header.style.height = "90px"
    }    
})
/*Hay un bug cuando intento pasar ahora al modo ventana, que el header queda muy grande, entonces se hace lo siguiente*/
window.addEventListener("resize", function(){

    let ancho = document.documentElement.clientWidth
    
    if(ancho>480){
        header.style = ""
    }
})