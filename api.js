const cardContainer = document.getElementById('card-container');

const fetchApiData = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    const characters = data.results;

    characters.forEach(character => {
        createCharacterCard(character);
    });
};

const createCharacterCard = (character) => {
    // Crear la tarjeta principal
    const card = document.createElement('div');
    card.classList.add('card');

    // Crear el elemento de la imagen
    const img = document.createElement('img');
    img.src = character.image;
    img.alt = character.name;

    // Crear el contenedor de contenido
    const content = document.createElement('div');
    content.classList.add('card-content');

    // Añadir el nombre
    const name = document.createElement('h1');
    name.textContent = character.name;

    // Añadir el estado y círculo de color
    const statusContainer = document.createElement('div');
    statusContainer.classList.add('status-container');

    const statusCircle = document.createElement('div');
    statusCircle.classList.add('circle');
    statusCircle.classList.add(character.status.toLowerCase());

    const statusText = document.createElement('p');
    statusText.textContent = character.status;

    statusContainer.appendChild(statusCircle);
    statusContainer.appendChild(statusText);

    // Añadir la ubicación
    const locationLabel = document.createElement('p');
    locationLabel.classList.add('gray');
    locationLabel.textContent = 'Last known location:';
    const locationText = document.createElement('p');
    locationText.textContent = character.location.name;

    // Añadir el primer episodio donde apareció
    const episodeLabel = document.createElement('p');
    episodeLabel.classList.add('gray');
    episodeLabel.textContent = 'First seen in:';
    const episodeText = document.createElement('p');
    episodeText.textContent = character.origin.name;

    // Añadir todos los elementos al contenedor de contenido
    content.appendChild(name);
    content.appendChild(statusContainer);
    content.appendChild(locationLabel);
    content.appendChild(locationText);
    content.appendChild(episodeLabel);
    content.appendChild(episodeText);

    // Añadir la imagen y el contenido a la tarjeta
    card.appendChild(img);
    card.appendChild(content);

    // Agregar la tarjeta al contenedor principal
    cardContainer.appendChild(card);
};

// Llamar a la función para obtener los personajes
fetchApiData();
