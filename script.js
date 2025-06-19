// Función para obtener un color aleatorio: verde, azul o rojo
function getRandomColor() {
  const colors = ['green', 'blue', 'red'];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

// Aplica 3 colores aleatorios a todos los h5 al hacer clic
document.querySelectorAll('h5').forEach((h5) => {
  h5.addEventListener('click', () => {
    h5.style.color = getRandomColor();
  });
});
