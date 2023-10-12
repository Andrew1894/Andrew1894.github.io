function calculaproforma(){
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var curso = document.getElementById("curso").value;
    var alumnos = parseInt(document.getElementById("alumnos").value);
    var precio1 = parseFloat(document.getElementById("precio1").value);
    
    console.log("NOMBRE: " + nombre);
    console.log("APELLIDOS: " + apellidos);
    console.log("CURSO: " + curso);
    console.log("CANT. ALUMNOS: " + alumnos);
    console.log("PRECIO: " + precio1);

    var PRESUPUESTO = (alumnos*precio1);

    console.log("PRECIO TOTAL: " + PRESUPUESTO);

    document.getElementById("monto").innerHTML="EL MONTO TOTAL POR: "+alumnos+" PARA EL CURSO DE: "+curso+" ES DE: S/. " + PRESUPUESTO;
}