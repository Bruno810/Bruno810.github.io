//========Scipt para ocultar y mostrar el contenido al apretar el boton de los contactos==============
const links = document.getElementById('links')
const boton = document.getElementById('boton')

boton.addEventListener('click' , mostrarlinks)

function mostrarlinks () {
    if (links.style.display == "inline-block") {
        //Oculta el contenido
        links.style.display = "none"
        boton.textContent = "Mostrar más"
    } else {
        //Muestra el contenido
        links.style.display = "inline-block"
        boton.textContent = "Mostrar menos"
    }
}


//=================Temas de la pagina=================
const barraizq = document.getElementById('barra-izquierda')
const main = document.getElementById('main')
const columna = document.getElementById('columna')
const footer = document.getElementById('footer')

//===Tema oscuro===
document.getElementById('luna').addEventListener('click', function(){
    //general
    document.body.classList = ''
    document.body.classList.add('tema-oscuro')

    //columna
    columna.classList = ''
    columna.classList.add('tema-oscuro-columna')

    //barra izquierda
    barraizq.classList = ''
    barraizq.classList.add('tema-oscuro-barra-izquierda')

    //main
    main.classList = ''
    main.classList.add('tema-oscuro-main')

    //footer
    footer.classList = ''
    footer.classList.add('tema-oscuro-footer')
})



//===Tema claro===
document.getElementById('sol').addEventListener('click', function(){
    //general
    document.body.classList = ''
    document.body.classList.add('tema-claro')

    //barra izquierda
    barraizq.classList = ''
    barraizq.classList.add('tema-claro-barra-izquierda')

    //columna
    columna.classList = ''
    columna.classList.add('tema-claro-columna')

    //main
    main.classList = ''
    main.classList.add('tema-claro-main')

    //footer
    footer.classList = ''
    footer.classList.add('tema-claro-footer')
})



//===Tema arbol===
document.getElementById('arbol').addEventListener('click', function(){
    //general
    document.body.classList = ''
    document.body.classList.add('tema-arbol')

    //barra izquierda
    barraizq.classList = ''
    barraizq.classList.add('tema-arbol-barra-izquierda')

    //columna
    columna.classList = ''
    columna.classList.add('tema-arbol-columna')

    //main
    main.classList = ''
    main.classList.add('tema-arbol-main')

    //footer
    footer.classList = ''
    footer.classList.add('tema-claro-footer')
})



//===Tema agua===
document.getElementById('agua').addEventListener('click', function(){
    //general
    document.body.classList = ''
    document.body.classList.add('tema-agua')

    //barra izquierda
    barraizq.classList = ''
    barraizq.classList.add('tema-agua-barra-izquierda')

    //columna
    columna.classList = ''
    columna.classList.add('tema-agua-columna')

    //main
    main.classList = ''
    main.classList.add('tema-agua-main')

    //footer
    footer.classList = ''
    footer.classList.add('tema-claro-footer')
})