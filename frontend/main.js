// Función para cargar los personajes desde la API
async function loadCharactersFromAPI() {
    const characterList = document.getElementById("characterList");

    try {
        // Realiza una solicitud a la API para obtener los personajes
        const response = await fetch('http://localhost:3000/api/characters');  // Ajusta la URL según la ubicación de tu API
        const characters = await response.json();

        characters.forEach(character => {
            const characterCard = document.createElement("div");
            characterCard.className = "characterCard";
            characterCard.innerHTML = `<h3>${character.name}</h3><img src="${character.image}" alt="${character.name}">`;

            characterCard.addEventListener("click", () => {
                alert(`¡Has seleccionado a ${character.name}!`);
            });

            characterList.appendChild(characterCard);
        });
    } catch (error) {
        console.error('Error al cargar los personajes desde la API:', error);
    }
}

// Carga los personajes desde la API al cargar la página
document.addEventListener("DOMContentLoaded", loadCharactersFromAPI);
