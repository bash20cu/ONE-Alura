var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click",function(){
  //console.log("buscando pacientes.");
  var xhr = new XMLHttpRequest;
  xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
  
  xhr.addEventListener("load",function(){
    //console.log(xhr.responseText);
    var respuesta = xhr.responseText;

    var pacientes = JSON.parse(respuesta);
    
    

    pacientes.forEach(function(paciente) { 
      if(pacienteDuplicado(paciente)){        
        return;
      };     
      adicionarPacienteEnLaTabla(paciente);
      //console.log(paciente);
    });

  });
  xhr.send();

});



function pacienteDuplicado(paciente){
  var pacienteExistente = document.querySelectorAll(".paciente");
  var pacienteComparaArr = []
  
  // Recorremos la tabla pacientes, con todos los pacientes.
  for( var i = 0; i < pacienteExistente.length; i++){

    var TDs = pacienteExistente[i].querySelectorAll("td");

    
    // creamos un arreglo para guardar la tabla que se encuentra en la pagina.
    var pacienteCompara = {
      nombre: "",
      peso: "",
      altura: "",
      gordura : "",
      imc : "",
  };
  //Asumiendo que el orden de la tabla no cambia dinamicamente, 
  // asignamos a cada nodo el valor que contiene, convirtiendo  
  // los correspondientes valores
  pacienteCompara.nombre = TDs[0].innerHTML;
  pacienteCompara.nombre = String(pacienteCompara.nombre);

  pacienteCompara.peso = (TDs[1].innerHTML);
  pacienteCompara.peso = parseFloat(pacienteCompara.peso);
  
  pacienteCompara.altura = TDs[2].innerHTML;
  pacienteCompara.altura = parseFloat(pacienteCompara.altura)
  
  pacienteCompara.gordura = TDs[3].innerHTML;
  pacienteCompara.gordura = parseFloat(pacienteCompara.gordura)
  
  pacienteCompara.imc = TDs[4].innerHTML;
  pacienteCompara.imc = parseFloat(pacienteCompara.imc)
  
  //Guardamos todo en el Arreglo
  pacienteComparaArr.push(pacienteCompara);

  }

  //Comparamos el Paciente con el Arreglo de los pacientes de la tabla
  var compara = false;
  var errores = [];
  for(var i = 0; i < pacienteComparaArr.length; i++){
    
    if(paciente.nombre == pacienteComparaArr[i].nombre && paciente.peso == pacienteComparaArr[i].peso){
      //console.log("mismo nombre, y peso");
      compara = true;
    }
    if(paciente.altura == pacienteComparaArr[i].altura && paciente.gordura == pacienteComparaArr[i].gordura ){
        //console.log("mismo altura, y gordura");
        compara = true;
    }
    if (paciente.imc == pacienteComparaArr[i].imc){
          //console.log("misma imc");
          errores.push("Paciente "+ pacienteComparaArr[i].nombre +" Duplicado");
      }
    }
    console.log(errores);
    exhibirMensajesErroresBuscar(errores)
    return compara;
  }

  // funcion modificada, para mostrar los nombres duplicados
  function exhibirMensajesErroresBuscar(errores){
    var ul = document.querySelector("#mensaje-errores-pacientes");
    //ul.innerHTML = "";
    errores.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}