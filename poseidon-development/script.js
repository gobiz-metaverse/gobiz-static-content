const wrapper = document.querySelector('.wrapper');
const noBtn = document.querySelector('.button');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
noBtn.addEventListener('mouseover', () => {
  const i =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * 900 + 1);
  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';
});

noBtn.addEventListener('click', () => {
  alert('🤡 Chúc mừng bạn đã bấm thành công 🤡');
});
