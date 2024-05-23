async function deleteCharacters(charactersId) {
    try {
        fetch(`https://json-server-alura-api.vercel.app/characters/${charactersId}`, {
            method: 'DELETE'
        })

        const removeCharacters = document.getElementById(charactersId);
        removeCharacters.remove();

        if (response.ok) {
            console.log("Producto eliminado exitosamente");
        } else {
            console.error("Error al eliminar el producto:", response.status);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export { deleteCharacters };
