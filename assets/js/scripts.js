// tercera Actividad
const actividad3 = () => { 
    const element = document.getElementById("ele1");
    const pintar = (element, color = 'green') => element.style.backgroundColor = color;
    element.addEventListener("click", () => pintar(element, 'yellow'));
}

// cuarta actividad
const actividad4 = () => { 
    // función que cambia el color de fondo de un elemento html a negro
    const bkgBlack = (element) => {
        element.style.backgroundColor = 'black';
    }

    // función que busca un elemento por id, y le cambia el color a negro cuando se le hace click
    const handleOnClick = (id) => {
        const element = document.getElementById(id);
        element.addEventListener('click', () => bkgBlack(element));
    }

    handleOnClick('blockBlue');
    handleOnClick('blockRed');
    handleOnClick('blockGreen');
    handleOnClick('blockYellow');
}

const init = () => {
    const pathname = window.location.pathname;
    if (pathname === "/pintar.html") {
        actividad3();
    } else if (pathname === "/4_colores.html") { 
        actividad4();
    }
}

init();
