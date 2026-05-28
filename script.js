
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.doc-btn').forEach(button => {

  button.addEventListener('click', () => {

    modal.style.display = 'flex';
    modalImage.src = button.dataset.image;

  });

});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {

  if(e.target === modal){
    modal.style.display = 'none';
  }

});
