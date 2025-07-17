
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
    if (removeBtn) removeBtn.classList.remove('hidden');
    if (pictogramSelect) pictogramSelect.value = "";
  };
  reader.readAsDataURL(file);
  
  
});
if (removeBtn) {
  removeBtn.addEventListener('click', () => {
    previewImg.src = '';
    previewImg.classList.add('hidden');
    removeBtn.classList.add('hidden');
    document.getElementById('upload').value = '';
  });
}
if (pictogramSelect) {
  pictogramSelect.addEventListener('change', function() {
    if (this.value) {
      previewImg.src = 'assets/' + this.value;
      previewImg.classList.remove('hidden');
      if (removeBtn) removeBtn.classList.add('hidden');
      document.getElementById('upload').value = '';
    }
  });
}

flatpickr("#datum", {
  locale: "hr",
  dateFormat: "d.m.Y.",  // DD.MM.GGGG
  allowInput: true
});


function sakrijPraznaPolja() {
  const rows = document.querySelectorAll('.form-row');
  rows.forEach(row => {
    const input = row.querySelector('input, select, textarea');
    if (input && !input.value.trim()) {
      row.classList.add('hide-on-print');
    } else {
      row.classList.remove('hide-on-print');
    }
  });
}


window.addEventListener('beforeprint', sakrijPraznaPolja);