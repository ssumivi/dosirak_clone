window.addEventListener("load", function () {
  //apply AOS
  AOS.init();
  //상단 스크롤 기능
  const header = document.querySelector(".header");
  const mbt = this.document.querySelector(".mobile-btn");
  let scy = 0;

  window.addEventListener("scroll", function () {
    // 새로 고침 / url 입력해서 html 출력시
    // 1.스크롤바의 픽셀 위치값을 파악해서
    scy = this.document.documentElement.scrollTop;
    // 2.class 적용 여부 결정
    if (scy > 0) {
      header.classList.add("active");
      mbt.classList.add("active");
    } else {
      header.classList.remove("active");
      mbt.classList.remove("active");
    }
  });
  //mobile menu bar click (mediaquery:1024px)
  const navmb = this.document.querySelector(".nav-mb");
  const htmlRoot = this.document.querySelector("html");

  mbt.addEventListener("click", function () {
    const state = this.classList.contains("ani");
    if (state) {
      //햄버거 버튼 눌렀을 때 X 모양으로 바뀜
      this.classList.remove("ani");
      //모바일 메뉴창 열리는 코드
      navmb.classList.remove("active");
      //메뉴창 열렸을 때 스크롤 안 생기게 해줌
      htmlRoot.classList.remove("active");
    } else {
      //햄버거 버튼 눌렀을 때 X 모양으로 바뀜
      this.classList.add("ani");
      //모바일 메뉴창 열리는 코드
      navmb.classList.add("active");
      //메뉴창 열렸을 때 스크롤 안 생기게 해줌
      htmlRoot.classList.add("active");
    }
  });
  //swiper apply
  const swiper = new Swiper(".sw-visual", {
    effect: "fade",
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
  });
  //swiper apply
  const swBusiness = new Swiper(".sw-business", {
    breakpoints: {
      slidesPerView: 1,
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  // gotop btn
  const goTop = this.document.querySelector(".goTop")
  goTop.addEventListener("click", function(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })
  let footer = this.document.querySelector(".footer");
  let footerY = footer.offsetTop;
  let waypoint_service = new Waypoint({
    element: document.querySelector(".service"),
    handler: function (direction) {
      if (direction === "down") {
        goTop.classList.add("active");
      } else {
        goTop.classList.remove("active");
      }
    },
    offset: "80%",
  });
});
