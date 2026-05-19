
// Buscamos las id


const cajaResultado = document.getElementById("resultado");
  


function mostrarcapicua(){



   // Definimos el número directamente como texto (con comillas)
    let nuInput = "2992"; 

    let numeroAlReves = "";

    // Bucle para darle la vuelta (marcha atrás)
    for (let i = nuInput.length - 1; i >= 0; i--) {
        numeroAlReves = numeroAlReves + nuInput[i];
    }

    // Comparamos si el derecho y el revés son iguales
    if (nuInput === numeroAlReves) {
        cajaResultado.innerHTML = `El número ${nuInput} <strong>SÍ es capicúa</strong>.`;
    } else {
        cajaResultado.innerHTML = `El número ${nuInput} <strong>NO es capicúa</strong>.`;
    } 






};


    



    
   



  

   





