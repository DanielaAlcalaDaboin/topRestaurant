// obtener los elementod de la clase .close
let cerrar = document.querySelectorAll(".close");
//Recorrerlo
//Agergar un evento Click a cada uno de ellos
cerrar.forEach(function (cerr) {

    cerr.addEventListener("click",function(evento) {
        console.log('cerrar página');
        evento.preventDefault();
        let content = document.querySelector(".content");
        // quitar animación
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        // Agregar clases para animar su salida
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");
        
        setTimeout(function() {
            location.href ="../index.html";
            
        }, 1000);

    });
} );


