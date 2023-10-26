const projectTextList = document.querySelector('.our_project-text_list');
const openBtn = document.querySelector('.our_project-btn');
const closeBtn = document.querySelector('.our_project-close-btn');

// Определите screenWidth на основе фактической ширины экрана
const screenWidth = window.innerWidth;

openBtn.addEventListener('click', function () {
  projectTextList.style.height = 'auto';
  projectTextList.style.marginBottom = '20px';
  openBtn.style.display = 'none';
  closeBtn.style.display = 'flex';
});

closeBtn.addEventListener('click', function () {
  if (screenWidth >= 768 && screenWidth < 1240) {
    projectTextList.style.height = '76px';
  } else if (screenWidth >= 1240) {
    projectTextList.style.height = '160px';
  } else {
    projectTextList.style.height = '221px';
  }
  projectTextList.style.marginBottom = '0';
  openBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});