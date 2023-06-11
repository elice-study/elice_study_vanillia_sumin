const imgArr = [];
const titleArr = [];
//json data
async function findData(e) {
  const res = await fetch("./dummy.json");
  const datas = await res.json();
  //e.target이 왜 안될까요..
  const movieNumber = e.target.className.split("_");
  const imgData = datas.find((data) => {
    data.movieId === movieNumber[1];
  });
  console.log(imgData);
  const bgImg = document.querySelector(".modal__layout__body > header");

  const imgURL = imgData.posterImageFileName;
  bgImg.style.backgroundImage = `url(../img/${imgURL})`;
}

// fetch("./dummy.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (myJson) {
//     const toJson = JSON.stringify(myJson);
//     const toObj = JSON.parse(toJson);
//     console.log(toObj[1].title);
//     toObj.forEach((El) => {
//       titleArr.push(El.title);
//       imgArr.push(El.posterImageFileName);
//     });
//   });

const modal = `
<div class="modal__layout__body">
<header>
<div class="header__close">
  <i class="fa-sharp fa-solid fa-circle-xmark fa-2xl"></i>
</div>
<div class="header__row">
  
  <div class="header__row__heart">
    <i class="fa-regular fa-heart fa-sm"></i>
    <span class="header__row__heartCount">31</span>
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

const scrollLock = () => {
  document.body.style.overflow = "hidden";
};
const scrollOn = () => {
  document.body.style.overflow = "unset";
};

const openModal = document.querySelectorAll(".movies div");
openModal.forEach((El) =>
  El.addEventListener("click", function () {
    //modal
    const modalEl = document.createElement("div");
    modalEl.setAttribute("class", "modal__layout");
    modalEl.innerHTML = modal;
    document.body.prepend(modalEl);

    //modal open시 스크롤방지
    window.scrollTo({ top: 0 });
    scrollLock();

    //heart click
    const heart = document.querySelector(".header__row__heart i");
    heart.addEventListener("click", function () {
      const heartFull = document.createElement("i");
      heartFull.className = "fa-solid fa-heart fa-sm cliked";
      heartFull.style.color = "#fff";
      heart.before(heartFull);
      heart.remove();

      //heart-count
      const heartCountEl = document.querySelector(".header__row__heartCount");
      let heartCount = heartCountEl.innerText / 1;
      heartCountEl.innerText = heartCount + 1;
    });
    //heartFull click
    // const heartFull = document.querySelector(".fa-solid fa-heart fa-sm cliked");
    // heartFull.addEventListener('click',function(){
    //   const heart = document.createElement('i');
    //   heart.className = "fa-regular fa-heart fa-sm";
    //   heart.style.color = "#bcbcbc";
    //   heartFull.before(heart);
    //   heartFull.remove();
    // });

    //title 넣기
    //1.span 생성해서 className설정한다
    //2.클릭한 객체의 className에서 index값 찾기
    //3.index에 맞는 title 값 찾아서 innerText로 넣어준다.
    //4.맞는 위치에 넣기
    const titleEl = document.createElement("span");
    titleEl.setAttribute("class", "header__row__title");
    const header_row = document.querySelector(".header__row");
    const titleNodes = [...this.parentElement.children];
    const index = titleNodes.indexOf(this);
    titleEl.innerText = titleArr[index];
    header_row.prepend(titleEl);
    console.log(index);

    //modal bg-img 바꾸기
    // const bgImg = document.querySelector(".modal__layout__body > header");

    // const imgURL = imgArr[index];
    // bgImg.style.backgroundImage = `url(../img/${imgURL})`;
    findData();

    //close 클릭시 modal 닫힘
    document
      .querySelector(".header__close > i")
      .addEventListener("click", function () {
        document.body.removeChild(modalEl);

        //modal 닫히면 스크롤 복귀
        scrollOn();
      });
  })
);
