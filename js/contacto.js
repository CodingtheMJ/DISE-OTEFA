document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', e => {
    // Solo actuamos si el dispositivo *no* tiene hover
    if (window.matchMedia('(hover: none)').matches) {
      // Si aún no está activa, mostrémosla y evitamos el enlace
      if (!card.classList.contains('active')) {
        e.preventDefault();
        // Quitamos la clase a cualquier otra tarjeta activa
        document
          .querySelectorAll('.card.active')
          .forEach(c => c.classList.remove('active'));

        card.classList.add('active');
      }
      // Si ya está activa, dejamos que el enlace se siga con normalidad
    }
  });
});
