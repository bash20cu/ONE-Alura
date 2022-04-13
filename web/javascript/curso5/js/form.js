var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPacientes(form);
    
    
    var pacienteTr = contruirTr(paciente);
    
    var errores = validarPaciente(paciente);

    //console.log(errores);
    if(errores.length > 0){
        //console.log(errores);
        exhibirMensajesErrores(errores);
        return;
    }

    adicionarPacienteEnLaTabla(paciente);
    form.reset();
    
    var mensajesErrores = document.querySelector("#mensaje-errores");
    mensajesErrores.innerHTML = "";

});

function adicionarPacienteEnLaTabla(paciente){
    var pacienteTr = contruirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

function capturarDatosPacientes(form){
    // Capturando los datos del formulario
    var paciente = {
        nombre : form.nombre.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calcularIMC(form.peso.value,form.altura.value)
    }
    return paciente;
}

function contruirTr(paciente) {
    // Crear elementos <TD> <TR>
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    var nombreTd = contruirTd(paciente.nombre,"info-nombre"),
        pesoTd = contruirTd(paciente.peso,"info-peso"),
        alturaTd = contruirTd(paciente.altura,"info-altura"),        
        gorduraTd = contruirTd(paciente.gordura,"info-gordura"),
        imcTd = contruirTd(paciente.imc,"info-imc");
        
    // Asignacion al <TR> de lo <TD> y la tabla
    pacienteTr.appendChild(contruirTd(paciente.nombre,"info-nombre"));
    pacienteTr.appendChild(contruirTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(contruirTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(contruirTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(contruirTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function contruirTd(dato,clase) {
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;    
    
    return td
}

function validarPaciente(paciente){
    var errores = [];
    
    if(paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacío");
    }
    if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacío");
    }
    if(paciente.altura.length == 0){
        errores.push("La altura no puede estar vacía");
    }
    if(paciente.gordura.length == 0){
        errores.push("El porcentaje de gordura no puede estar vacío");
    }
    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    }
    if(!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecta");
    }
    //console.log(errores);
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensaje-errores");
    ul.innerHTML = "";
    errores.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}