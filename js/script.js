const checkbox = document.getElementById('test');
const textInput = document.getElementById('text');

function updateVisibility() {
  textInput.style.display = checkbox.checked ? 'inline' : 'none';
}

checkbox.addEventListener('change', updateVisibility);

updateVisibility();