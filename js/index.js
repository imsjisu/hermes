// index.js

// header 스크롤 이벤트
const header = document.getElementById("header");

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  console.log(scroll)

  if(scroll >= 100) {
    header.classList.add("on");
  } else if(scroll <100) {
    header.classList.remove("on");
  }
})

// 향수 mouseover 이벤트
const perfumeImg = document.querySelectorAll(".slick-slide>img");
const perfumeTxt = document.querySelectorAll(".slick-slide>ul");
console.log(perfumeImg);

perfumeImg.addEventListener("mouseover", () => {
  perfumeTxt.classList.add("on");
})