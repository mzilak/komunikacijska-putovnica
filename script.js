
const previewImg = document.getElementById('preview');
const removeBtn = document.getElementById('remove-photo');
const pictogramSelect = document.getElementById('piktogram-select');

document.getElementById('upload').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(event) {
    previewImg.src = event.target.result;
    previewImg.classList.remove('hidden');
    removeBtn.classList.remove('hidden');
    pictogramSelect.value = "";
  };
  reader.readAsDataURL(file);
});

removeBtn.addEventListener('click', () => {
  previewImg.src = '';
  previewImg.classList.add('hidden');
  removeBtn.classList.add('hidden');
  document.getElementById('upload').value = '';
});

pictogramSelect.addEventListener('change', function() {
  if (this.value) {
    previewImg.src = 'assets/' + this.value;
    previewImg.classList.remove('hidden');
    removeBtn.classList.add('hidden');
    document.getElementById('upload').value = '';
  }
});

function downloadPDF() {
  window.print();
}
