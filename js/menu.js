

let menu = document.getElementById("menu")
let header = document.getElementById("header")
let nav = document.getElementById("nav")

menu.addEventListener("click", function(){

    if(header.style.height == "90px" || header.offsetHeight == 90){
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