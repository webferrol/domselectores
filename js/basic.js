const crearElemento=(nuevoElemento,nombreClase,selectorPadre,texto)=>{
    let elemento = document.createElement(nuevoElemento);
    elemento.className=nombreClase;
    let elTexto = document.createTextNode(texto);
    elemento.appendChild(elTexto);
    document.querySelector(selectorPadre).appendChild(elemento);
}