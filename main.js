const modal = `
<div class="modal__layout__body">
<header>
<div class="header__close">
  <i class="fa-sharp fa-solid fa-circle-xmark fa-2xl"></i>
</div>
<div class="header__row">
  <span class="header__row__title">마녀 배달부 키키</span>
  <div class="header__row__heart">
    <i class="fa-regular fa-heart fa-lg"></i>
    <span>99</span>
  </div>
</div>
</header>

<main>
<div class="main__info">
  <div class="main__info__opening">1989</div>
  <div class="main__info__runningTimeMinutes">102분</div>
  <div class="main__info__permissibleAge">ALL</div>
</div>
<div class="main__story">
  <span
    >사랑스러운 초보마녀 ‘키키’는 검은 고양이 ‘지지’와 함께 빗자루를 타고
    마녀 수련을 떠난다. 항구 마을에 불시착한 키키는 첫날부터 우여곡절을
    겪지만, ‘배달’에 재능이 있다는 걸 발견하고 본격적인 마법 수련을
    시작하는데…
  </span>
</div>
<div class="main__creator">
  <span>감독: </span>
  <span>미야자키 하야오</span>
</div>
<div class="main__castMembers">
  <span>출연: </span>
  <span>타카야마 미나미</span>
</div>
</main>
<footer>
<div class="footer__title">Comments</div>
<div class="footer__underline"></div>
<div class="footer__comments"></div>
</footer>
<script
src="https://kit.fontawesome.com/6d5788fdc0.js"
crossorigin="anonymous"
></script>
<script src="main.js"></script>
</div>
`;

const scrollLock = ()=>{
    document.body.style.overflow = 'hidden';
}
const scrollOn = ()=>{
    document.body.style.overflow = 'unset';
}

const openModal = document.querySelector(".movie");
openModal.addEventListener('click',function(){
    const modalEl = document.createElement('div');
    modalEl.setAttribute('class','modal__layout');
    modalEl.innerHTML = modal;
    document.body.prepend(modalEl);
    scrollLock();

    document.querySelector('.header__close > i')
    .addEventListener('click',function(){
        document.body.removeChild(modalEl);
        scrollOn();
    })
});

