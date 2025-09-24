document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registro-form');
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add('was-validated');
  });
});
