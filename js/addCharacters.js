function addCharacters() {
    const form = document.querySelector('form');
    const nameCharacters = form.querySelector('#nameCharacters');
    const forceCharacters = form.querySelector('#forceCharacters');
    const imgCharacters = form.querySelector('#imgCharacters');
    const btnSend = form.querySelector('#btnSend');
    const btnClear = form.querySelector('#btnClear');

    btnSend.addEventListener('click', function (event) {
        event.preventDefault();

        let name = nameCharacters.value;
        let force = parseFloat(forceCharacters.value);
        let img = imgCharacters.value;

        if (name.trim() === '' || isNaN(force) || img.trim() === '') {
            alert('Por favor completa todos los campos');
            return;
        }

        const newCharacters = {
            name: name,
            force: force,
            img: img
        };

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCharacters)
        };

        fetch("http://localhost:3000/characters", options)
            .then(response => {
                if (!response.ok) {
                    throw new Error("La solicitud no fue exitosa");
                }
                return response.json();
            })
            .then(data => {
                console.log("Producto añadido:", data);
            })
            .catch(error => {
                console.error("Error al realizar la solicitud:", error);
            });

        location.btnSend();
    });

    btnClear.addEventListener('click', function (event) {
        event.preventDefault()
        nameCharacters.value = '';
        forceCharacters.value = '';
        imgCharacters.value = '';
    });
}

addCharacters()

export { addCharacters };
