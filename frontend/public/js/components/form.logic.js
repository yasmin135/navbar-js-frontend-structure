//Espera que el dom este completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () =>{
    // selecciona el formulario con la clase contact-form__form
    const form = document.querySelector(".contact-form__form")

    //verifica que el formulario exista en el DOM
    if (form){
        //escucha el evento submit del formulario
        form.addEventListener("submit", async (e) => {
            //prevenir el comportamiento por defecto del navegdor de recarga de la pagina
            e.preventDefault();

            const formdata = new FormData(form);
            const data = Object.fromEntries(formdata);

            try{

                const response
            }
        })
    }

});