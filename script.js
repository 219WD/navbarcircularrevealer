document.addEventListener("DOMContentLoaded", () => {
    // Este evento se ejecuta cuando el DOM del documento HTML ha cargado completamente.

    const revealerNav = window.revealer({
        // Aquí se crea un nuevo objeto 'revealerNav' utilizando una función llamada 'revealer' que proviene de un script externo.
        revealElementSelector: ".nav-js",
        // Se configura 'revealerNav' para revelar el elemento con la clase 'nav-js' cuando se active.
        options: {
            anchorSelector: ".nav-btn-js"
            // Se especifica que el botón que activa la revelación tiene la clase 'nav-btn-js'.
        }
    });

    const actionBtn = document.querySelector(".nav-btn-js");
    // Se selecciona el elemento del botón con la clase 'nav-btn-js' y se almacena en la variable 'actionBtn'.

    actionBtn.addEventListener("click", () => {
        // Se agrega un evento de clic al botón.

        if (!revealerNav.isRevealed()) {
            // Si el elemento no se ha revelado aún...

            revealerNav.reveal();
            // Se revela el elemento asociado a través de la función 'reveal' de 'revealerNav'.

            actionBtn.setAttribute("data-open", true);
            // Se establece el atributo 'data-open' en el botón como 'true'. (Este atributo probablemente se utiliza para controlar el estado del botón)
        } else {
            // Si el elemento ya está revelado...

            revealerNav.hide();
            // Se oculta el elemento asociado a través de la función 'hide' de 'revealerNav'.

            actionBtn.setAttribute("data-open", false);
            // Se establece el atributo 'data-open' en el botón como 'false'.
        }
    })
})