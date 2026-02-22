(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();
  
  const box = document.querySelector('.box'); const trueEl = document.querySelector('.true'); box.addEventListener('mouseenter', () => {
    const style = window.getComputedStyle(trueEl);
    const matrix = new DOMMatrixReadOnly(style.transform); 
    const angle = Math.round(Math.atan2(matrix.b, matrix.a) * (180 / Math.PI));
    trueEl.style.animation = 'none'; 
    trueEl.style.transform = `rotate(${angle}deg)`; 
    void trueEl.offsetWidth; 
    trueEl.style.transform = 'rotate(0deg)'; });
    box.addEventListener('mouseleave', () => { 
      trueEl.style.animation = 'true 3s linear infinite'; trueEl.style.transform = '';
    });

    const cubeSide = document.querySelectorAll('.cube-side');

    for(let i = 0; i <= cubeSide; i++) {
      
    }