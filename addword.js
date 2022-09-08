
function addword(){
    const music = new Audio('sonidos/tiza.mp3')
    music.play()

    limpiarAdd();

    const input = document.querySelector('#input')
    const guardar = document.querySelector(".button_save")
    var exsite =false ;

    guardar.addEventListener('click', e =>{
        const music = new Audio('sonidos/tiza.mp3')
        music.play()
        
        if (input.value != ""){
            input.value = input.value.toUpperCase()

            if(!/[\u00C1\u00E1\u00C9\u00CD\u00ED\u00D3\u00F3\u00DA\u00FA\u00DC\u00FC\u00F10-9]/.test(input.value)){
                for (let index = 0; index < localStorage.length; index++) {  
                    dato = localStorage.getItem(index)    
        
                    if (input.value.toUpperCase() == dato){
                        exsite = true
                        swal.fire({
                            title: input.value,
                            text: "Ya existe"
                            
                        })
                    }
                }
        
                if (exsite == false){
                    PalabrasList.push(input.value)
                    localStorage.setItem(localStorage.length, input.value.toUpperCase())
                    swal.fire({
                        title: input.value,
                        text: "Agregado correctamente"
                        
                    })
                }

                
                document.querySelector('#input').value = "";

            }else{
                swal.fire({
                    title: "INVÁLIDO",
                    text: "No se permiten números ni dígitos especiales"
                    
                })
            }     

        }
        
        
        
    })


} 


function limpiarAdd(){
    document.querySelector("footer").style.display = "none"
    document.querySelector(".button_add").style.display = "none";
    document.querySelector(".button_start").style.display = "none";
    document.querySelector("canvas").style.display = "none";
    document.querySelector(".button_save").style.display = "";
    document.querySelector("#input").style.display = "";
    document.querySelector("#restrict").style.display = "";
    document.querySelector("label").style.display = "";
    document.querySelector(".button_gameS").style.display = "";
}
