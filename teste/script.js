document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const submenu = item.querySelector('.submenu');
        if (submenu) { // Apenas adiciona o event listener se houver um submenu
            item.addEventListener('click', function(event) {
                // Previne que o clique no item principal navegue (se for um link real)
                event.preventDefault();

                // Fecha outros submenus abertos (opcional, para ter apenas um aberto por vez)
                menuItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });

                // Alterna a classe 'active' no item principal
                item.classList.toggle('active');
            });
        }
    });

    // Fechar o submenu se clicar fora dele
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.main-menu')) {
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});