document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los cubos
    document.querySelectorAll('.cont-hijo').forEach(function(cube) {
        cube.addEventListener('click', function(e) {
            e.stopPropagation();
            const title = cube.getAttribute('data-title');
            const desc = cube.getAttribute('data-desc');
            if (title && desc) {
                document.getElementById('modalTitle').textContent = title;
                document.getElementById('modalDesc').textContent = desc;
                document.getElementById('toolModal').style.display = 'flex';
            }
        });
    });

    // Cerrar modal al hacer clic en la X
    document.getElementById('closeModal').onclick = function() {
        document.getElementById('toolModal').style.display = 'none';
    };

    // Cerrar modal al hacer clic fuera del contenido
    document.getElementById('toolModal').onclick = function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    };
});