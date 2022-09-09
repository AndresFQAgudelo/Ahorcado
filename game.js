document.querySelector(".letters").style.display = "none";
document.querySelector(".letters1").style.display = "none";
document.querySelector(".letters2").style.display = "none";
document.querySelector(".button_save").style.display = "none";
document.querySelector(".button_gameS").style.display = "none";
document.querySelector(".button_gameN").style.display = "none";
document.querySelector("#input").style.display = "none";
document.querySelector("#restrict").style.display = "none";
document.querySelector("label").style.display = "none";

var Palabra = "";
var secretword = [];
var errores = 0;
var aciertos = 0;
var block = false;
PalabrasList = ['HTML', 'CSS', 'JAVASCRIPT', 'ALURA', 'ONE', 'DIV',
 'PROGRAMACION', 'AHORCADO', 'WEB', 'VIRTUAL', 'AYUDA', 'ARMADO', 'COCINA', 'INSPECCIONAR']



function iniciar() {
    block  =false
    const music = new Audio('sonidos/tiza.mp3')
    music.play()
    cargarDatos();
    limpiar();
    ponerguiones();
    dibujar(false);
    dibujarLetra();

    
}

function cargarDatos(){
    for (let index = 0; index < PalabrasList.length; index++) {  
        localStorage.setItem(index, PalabrasList[index])    
    }
}

function restaurar(){
    window.location.reload()
}

function limpiar(){
    document.querySelector(".button_gameS").style.display = "";
    document.querySelector(".button_gameN").style.display = "";
    document.querySelector(".button_start").style.display = "none";
    document.querySelector(".button_add").style.display = "none";
    document.querySelector(".letters").style.display = "";
    document.querySelector(".letters1").style.display = "";
    document.querySelector(".letters2").style.display = "";
    document.querySelector("footer").style.display = "none"

    
    var elems = document.querySelectorAll(".letter")

    if (Palabra != ""){
        swal.fire({
            title: "Nueva Palabra",
            text: "Buena Suerte",
            
        })
        for(i = 0; i<elems.length; i++){
            elems[i].style.display = ""
        }
    }
    Palabra = ""
    secretword = []
    Palabra = selectword();  
    errores = 0;
    aciertos = 0; 
    dibujar(true)

}

function ponerguiones(){
    for (i = 0; i< Palabra.length; i++){
        secretword.push("_")
    }  

}




function selectword(){
    key = window.localStorage.getItem(parseInt(Math.random()* localStorage.length))

    return key;
}

function dibujar(nuevo){
    var pantalla = document.querySelector("#figura");
    var dibujo = pantalla.getContext('2d');
    
    if(nuevo){
        dibujo.clearRect(0,0, pantalla.clientWidth, pantalla.height)
    }else{
        switch (errores) {
            case 0:
                var img = new Image();
                img.src = "imagenes/base.png";
    
                img.onload = function(){
                    dibujo.drawImage(img, 0, 0)
                }
                break;
                
            case 1:
                var img = new Image();
                img.src = "imagenes/vertical.png";
    
                img.onload = function(){
                    dibujo.drawImage(img, 0, 0)
                }
                break;
            case 2:
                var img = new Image();
                img.src = "imagenes/horizontal.png";
    
                img.onload = function(){
                    dibujo.drawImage(img, 0, 0)
                }
                break;
            
            case 3:
                var img = new Image();
                img.src = "imagenes/cuerda.png";
    
                img.onload = function(){
                    dibujo.drawImage(img, 0, 0)
                }
                break;
    
            case 4:
                var img = new Image();
                img.src = "imagenes/cabeza.png";
    
                img.onload = function(){
                    dibujo.drawImage(img, 0, 0)
                }
                break;
            
            case 5:
                var img = new Image();
                img.src = "imagenes/cuerpo.png";
    
                img.onload = function(){
                    dibujo.drawImage(img, 0, 0)
                }

                const music = new Audio('sonidos/lose.mp3')
                music.play()
    
                swal.fire({
                    title: "Perdiste",
                    text: "La palabra era " + Palabra,  
                    
                })
                block = true;
                break;
    
        
            default:
                break;
        }   
    } 
}

function dibujarLetra(){

    temp = secretword.toString()
    temp = temp.replace(/,/g, "")

    document.querySelector('#word').innerHTML = temp;
}

function letra(letra){

    if (!block ){
        if (Palabra.includes(letra)){
            for (i =0; i< Palabra.length; i++){
                if(Palabra[i] == letra){
                    aciertos += 1;
                    secretword[i] = letra;
                    dibujarLetra();
                    ganaste();
                    const music = new Audio('sonidos/tiza.mp3')
                    music.play()
                   
                    document.getElementById(letra).style.display = "none"
                }
    
            } 
        }else{
            document.getElementById(letra).style.display = "none"
            errores+=1
            dibujar()
            const music = new Audio('sonidos/tiza2.mp3')
            music.play()
            
    
        }
        
    }

    

}

function ganaste(){
    temp = secretword.toString()
    temp = temp.replace(/,/g, "")

    if (Palabra == temp){
        block = true
        const music = new Audio('sonidos/win.mp3')
        music.play()
        swal.fire({
            title: "Felicidades",
            text: "La palabra era " + Palabra,
            
        })
        

    }
}




