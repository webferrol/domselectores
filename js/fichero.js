let boolPrimeraVez = true; //tiene que ser global, variable de tipo switch o "encendedor"
let elHTMLOl = null;
let i=0;//contador +


let crearElementoLi = (texto) =>{
    let elLi = document.createElement("li");
    i=i+1;
    elLi.id = "pais_"+i;
    elLi.innerHTML=texto;
    elHTMLOl.appendChild(elLi);
}

document.querySelector(".boton").addEventListener("click",e=>{
    e.preventDefault();
    let elPaisesTxt = document.querySelector("#paises"); //capturo el NODO de la entrada de datos
    let tmpTxt = elPaisesTxt.value.trim();//almacenar el texto (limpio de espacios en los laterales (trim))

    if(tmpTxt===""){
        //no hago nada
        //mensaje de error
        alert("El campo Países no puede estar vacío");
        elPaisesTxt.value = "";
        elPaisesTxt.focus();
    }else if(boolPrimeraVez){ //crear ol
        elHTMLOl=document.createElement("ol");
        elHTMLOl.className = "miLista";
        document.querySelector(".paises .lista").appendChild(elHTMLOl);
        crearElementoLi(tmpTxt);
        boolPrimeraVez=false;//para garantizar que sólo se entre la vez que se crea la lista
    }else{
        crearElementoLi(tmpTxt);
    }

    //COMPROBAR SI EL CONTROL DEL FORMULARIO ESTÁ VACÍO
});