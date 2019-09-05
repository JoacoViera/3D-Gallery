window.addEventListener('load', () => {
    document.getElementById('grid').classList.add('imagenes-cargadas');

    // Listener de los enlaces para filtrar por cada cateogria y todos
    const enlaces = document.querySelectorAll('#categorias a');
    const imagenes = document.querySelectorAll('.contenedor_tarjeta');
    for (const enlace of enlaces) {
        enlace.addEventListener('click', (evento) => {
            //cambiar a negrita el tipo seleccionado
            evento.preventDefault;
            //removemos la clase activo de todos los enlaces
            enlaces.forEach((enlace) => {enlace.classList.remove('activo')});
            evento.target.classList.add('activo');

            // traer la categoria seleccionda y marcar elementos
            const categoria = evento.target.innerHTML.toLowerCase();
            for(const tarjeta of imagenes){
                if(categoria === 'todos'){
                    tarjeta.style.display = 'block';
                }else{
                    if(!tarjeta.className.includes(categoria)){
                        tarjeta.style.display = 'none';
                    }
                    else{
                        tarjeta.style.display = 'block';
                    }
                }
            }
        });
    }

});