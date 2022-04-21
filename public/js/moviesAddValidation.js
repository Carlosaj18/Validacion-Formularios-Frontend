window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//  

// PREGUNTAS 
    // COMO SE HACEN LAS VALIDACION ON-TIME?
    // COMO SE ELIMINAN LOS ERRORES CORREGIDOS?

    let tituloPelicula = document.querySelector('#title');
    let calificacion = document.querySelector('#rating');
    let premios = document.querySelector('#awards');
    let date = document.querySelector('#release_date');
    let duracion = document.querySelector('#length');
    let genero = document.querySelector('#genre_id');
    let min = 0;
    let max = 10;
    let minDuration = 60;
    let maxDuration = 360;

    tituloPelicula.addEventListener('focus', function(e) {
        if(e){
            console.log("estoy en parado en titulo");
        }
    });

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        let errores = [];

        if(tituloPelicula.value == ""){
            // alert("El campo debe diligenciarse");
            errores.push('El campo del titulo debe diligenciarse');
            tituloPelicula.classList.toggle('.is-invalid');
        }
   
        if(calificacion.value < min || calificacion.value > max){
            errores.push("El valor del campo debe ser de 0 a 10");
        }

        if(premios.value == ""){
            errores.push('El campo de los premios debe diligenciarse');
            premios.classList.toggle('.is-invalid');
        }

        if(date.value == ""){
            errores.push('El campo date debe diligenciarse');
            date.classList.toggle('.is-invalid');
        }

        if(duracion.value < minDuration || duracion.value > maxDuration){
            errores.push("El valor del campo debe estar entre 60 a 360 minutos");
        }

        if(genero.value == ""){
            errores.push('El campo genero debe diligenciarse');
            genero.classList.toggle('.is-invalid');
        }

        if(errores.length > 0){
            e.preventDefault();
            
            let ulErrores = document.querySelector('.errores');
            
            errores.forEach(error => {
                ulErrores.innerHTML += `<li>${error}</li>`;
            });

            ulErrores.classList.toggle('.alert-warning');
        } else {
            formulario.classList.toggle('.is-valid');
            alert('La película se guardó satisfactoriamente')
        }

    })


}