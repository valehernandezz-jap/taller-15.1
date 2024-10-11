// Array con las frases
const phrases = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
];

// Selecciono el h3 por su id
const textElement = document.getElementById("changingText");

let index = 0;

// Función para cambiar la frase
function changePhrase() {
  textElement.textContent = phrases[index];
  index = (index + 1) % phrases.length; // Va a cambiar entre las frases de manera cíclica
}

changePhrase()

// Cambio la frase cada 2 segundos
setInterval(changePhrase, 2000);
