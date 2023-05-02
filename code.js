// Obtener los elementos de la galería de imágenes
const gallery = document.querySelector('.kodfun-galeri');
const images = gallery.querySelectorAll('div');

// Agregar un evento click a cada imagen
images.forEach(image => {
  image.addEventListener('click', () => {
    // Crear el modal
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // Crear la imagen dentro del modal
    const modalImg = document.createElement('img');
    modalImg.src = image.style.backgroundImage.slice(5, -2);
    modalImg.classList.add('modal-img');

    // Agregar la imagen al modal
    modal.appendChild(modalImg);

    // Agregar el modal al cuerpo de la página
    document.body.appendChild(modal);

    // Agregar un evento click al modal para cerrarlo al hacer clic fuera de la imagen
    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});
