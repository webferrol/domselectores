document.querySelector("#precios").value = document.querySelector("#pizzas").options[0].value;

document.querySelector("#pizzas").addEventListener("change",e=>{
    document.querySelector("#precios").value = e.target.options[e.target.selectedIndex].value;
    crearElemento("div","nombreClase",".selector",e.target.options[e.target.selectedIndex].text);
});

document.addEventListener("click",e=>{
    if(e.target.className==="nombreClase")
        e.target.parentNode.removeChild(e.target);

});