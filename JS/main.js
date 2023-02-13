fetch('https://63e13870dd7041cafb442cd8.mockapi.io/platos')
    .then(res => res.json())
    .then(data => {
        const container = document.createElement('div');
        container.classList.add('menu');
        for (let item of data) {
            const img = document.createElement('img');
            img.src = item.imagen;
            const h4 = document.createElement('h4');
            h4.textContent = item.plato;
            const span = document.createElement('span');
            span.textContent = item.precio;
            const p = document.createElement('p');
            p.textContent = item.descripcion;
            container.appendChild(img);
            container.appendChild(h4);
            container.appendChild(span);
            container.appendChild(p);
        }
        document.body.appendChild(container);
    });