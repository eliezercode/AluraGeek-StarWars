function deleteCharacters(charactersId) {
    fetch(`http://localhost:3000/characters/${charactersId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                console.log("Producto eliminado exitosamente");
                const removeCharacters = document.getElementById(charactersId);
                removeCharacters.remove();
            } else {
                console.error("Error al eliminar el producto:", response.status);
            }
        })
        .catch(error => console.error("Error:", error));
}

export { deleteCharacters };
