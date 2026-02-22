//*Mostrar página*//
async function getfile(actual,link) {
    let estilos = document.getElementById('estilos')
    let pagina = document.getElementById(actual)
    let objeto = await fetch(link);
    let text = await objeto.text();
    document.getElementById("contenido").innerHTML = text;
    pagina.style.borderBottom = "solid 2px red"
    pagina.style.color="rgb(4, 4, 127)"
    pagina.onmouseover="this.style.color='red'"
    switch (actual) {
        case 1:
            obtenerhidens(2,3,4,5)
            estilos.setAttribute('href','css/volc.css')
            break;
        case 2:
            obtenerhidens(1,3,4,5)
            estilos.setAttribute('href','')
            break;
        case 3:
            obtenerhidens(1,2,4,5)
            break;
        case 4:
            obtenerhidens(1,2,3,5)
            break;
        default:
            obtenerhidens(1,2,3,4)
            break;
    }
    mostrarImagen("bot1")
}

function obtenerhidens(hid1,hid2,hid3,hid4){
    let estilo = `border-bottom:solid 2px transparent;color:rgb(4, 4, 127)`

    let oculto1 = document.getElementById(hid1)
    let oculto2 = document.getElementById(hid2)
    let oculto3 = document.getElementById(hid3)
    let oculto4 = document.getElementById(hid4)
    oculto1.style = estilo
    oculto2.style = estilo
    oculto3.style = estilo
    oculto4.style = estilo

    let eventos = [{nombre:'mouseenter',color:'red'},
                   {nombre:'mouseleave',color:'rgb(4, 4, 127)'}] 
    
    eventos.forEach(evento => {
        oculto1.addEventListener(evento.nombre, () => {
            oculto1.style.color = evento.color
        })
        oculto2.addEventListener(evento.nombre, () => {
            oculto2.style.color = evento.color
        })
        oculto3.addEventListener(evento.nombre, () => {
            oculto3.style.color = evento.color
        })
        oculto4.addEventListener(evento.nombre, () => {
            oculto4.style.color = evento.color
        })
    })
}


//*Mostrar imagen*//
function mostrarImagen(idBoton,hid1,hid2,hid3,hid4,hid5) {
    let boton = document.getElementById(idBoton)
    let oculto1 = document.getElementById(hid1)
    let oculto2 = document.getElementById(hid2)
    let oculto3 = document.getElementById(hid3)
    let oculto4 = document.getElementById(hid4)
    let oculto5 = document.getElementById(hid5)
    let cambioIMG = document.getElementById("volcanFondo") 
    switch (idBoton) {
        case "bot1":
            cambioIMG.src = "img/volcanguía1.png"
            break;
        case "bot2":
            cambioIMG.src = "img/volcanguía2.png"
            break;
        case "bot3":
            cambioIMG.src = "img/volcanguía3.png"
            break;
        case "bot4":
            cambioIMG.src = "img/volcanguía4.png"
            break;
        case "bot5":
            break;
    }
    document.addEventListener("click", (e) => {
    // Si el clic no es en el botón, forzamos el foco de nuevo
        if (`${e.target}` !== "[object HTMLButtonElement]") {
            e.preventDefault(); // evita que el foco cambie
            boton.focus();
        }
    });
    
}
