let color = '';
let color2 = ''; 



document.addEventListener('keydown', function (event) {
    const keyColor = document.getElementById('key');
    if (event.key === 'a') {
        color = '#FFC0CB';
    } else if (event.key === 's') {
        color = '#FF8000';
    } else if (event.key === 'd') {
        color = '#80DAEB';
    }
    keyColor.style.backgroundColor = color;
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        color2 = '#572364';
    } else if (event.key === 'w') {
        color2 = '#9b9b9b';
    } else if (event.key === 'e') {
        color2 = '#6F4E37';
    }

    if (color2) {
        let block2 = document.getElementById("block-2");
        if (!block2) { 
            //creamos el block 2
            const html = `
                <div
                    id="block-2"
                    style="
                        background-color: white;
                        width: 200px;
                        height: 200px;
                        border: 2px solid black;
                    "
                ></div>`;
            document.body.insertAdjacentHTML("beforeend", html);
            block2 = document.getElementById("block-2");
        }
        block2.style.backgroundColor = color2;
    }
});

