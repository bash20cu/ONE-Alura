var campoFiltro = document.querySelector("#filtrar-tabla");
//console.log(campoFiltro);

campoFiltro.addEventListener("input",function(){
  //console.log(this.value);

  var pacientes = document.querySelectorAll(".paciente");
  
  if(this.value.length > 0){
    //console.log("campo digitado");
    for(var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      var tdNombre = paciente.querySelector(".info-nombre");
      var nombre = tdNombre.textContent;
      var expresion = new RegExp(this.value,"i");

      //console.log(nombre);
  
      if(!expresion.test(nombre)){
        paciente.classList.add("invisible");
      }else{
        paciente.classList.remove("invisible");
      }
    }
  } else {
    for(var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      paciente.classList.remove("invisible");
    }
  }

  

});