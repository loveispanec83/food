

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const body = document.querySelector("body");

  //................--->SCROLL<---...................//
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
  //.................--->END<---.....................//
//...............-->TABS<--.............////
  const tabsNav = document.querySelectorAll(".tabs-nav__link");
  const tabsContent = document.querySelectorAll(".tabs-content__item");

  tabsNav.forEach((navLink, index) => {
    navLink.addEventListener("click", () => {
      tabsNav.forEach((link) => {
        link.classList.remove("active");
      });

      navLink.classList.add("active");

      let navIndex = index;

      tabsContent.forEach((item, index) => {
        item.classList.remove("active");

        if (index === navIndex) {
          item.classList.add("active");
        }
      });
    });
  });
  //..............-->End<--....................////

//...................-->STARS<--.................///
  const staticStars = document.querySelectorAll(".static-stars");

  staticStars.forEach((starItem, index) => {
    let stars = starItem.dataset.stars;

    new Starry(starItem, {
      name: `stars-${index}`,
      readOnly: true,
      beginWith: 20 * stars,
      icons: {
        blank: "images/star-empty.svg",
        hover: "images/star-fill.svg",
        active: "images/star-fill.svg",
      },
    });
  });

  const rateStars = document.querySelector(".feedback-form__stars");
  const rating = new Starry(rateStars, {
    name: `rating`,
    icons: {
      blank: "images/star-empty.svg",
      hover: "images/star-fill.svg",
      active: "images/star-fill.svg",
    },
  });
  //...............-->END<--.........................///////


  ///lightSlider//
 const lightbox = document.querySelector(".product-slider__items");

 lightGallery(lightbox, {
   plugins: [lgPager],
   speed: 100,
   addClass: "product-lightbox",
   counter: false,
   download: false,
   closeOnTap: false,
   getCaptionFromTitleOrAlt: false,
 });

  //END//

  // лічильник//////////////////////////////////
  const quantityInput = document.querySelector(".quantity__input");
  const incrementButton = document.querySelector(".quantity__btn--plus");
  const decrementButton = document.querySelector(".quantity__btn--minus");

  incrementButton.addEventListener("click", () => {
    console.log("55");
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });

  decrementButton.addEventListener("click", () => {
    if (parseInt(quantityInput.value) > 0) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  });

  quantityInput.addEventListener("input", () => {
    const value = parseInt(quantityInput.value);
    if (!isNaN(value) && value >= 0 && value <= 99) {
      quantityInput.value = value;
    } else {
      quantityInput.value = 1;
    }
  });
  ////////////////////////////////////////////////

  //...............--->FILTERS<---...................//
  const filterBtns = document.querySelectorAll(".categories-nav__btn");
  const grid = document.querySelector(".categories-list");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // remove active class from all buttons
      filterBtns.forEach((filterBtn) => {
        filterBtn.classList.remove("active");
      });
      // add active class to clicked button
      btn.classList.add("active");

      // get the filter value from the clicked button
      const filterValue = btn.getAttribute("data-filter");

      // filter the grid items based on the filter value
      for (const item of grid.children) {
        if (filterValue === "all") {
          // item.style.display = "block";
          item.classList.remove("hide");
          item.classList.add("show");
        } else if (item.classList.contains(filterValue)) {
          // item.style.display = "block";
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          // item.style.display = "none";
          item.classList.remove("show");
          item.classList.add("hide");
        }
      }
    });
  });
  //..................-->END<--......................//

  //.................--->SLIDER(REVIEWS)<---.................//
  const swiper = new Swiper(".reviews__slider", {
    pagination: {
      el: ".reviews__dots",
      bulletClass: "reviews__dot",
      bulletActiveClass: "reviews__dot--active",
      clickable: true,
    },
    navigation: {
      nextEl: ".reviews__btn--next",
      prevEl: ".reviews__btn--prev",
    },
  });
  //..................-->END<---...........................//

//................-->BURGER_SLIDER<--.....................//
const burgerSwiper = new Swiper(".product-slider", {
  navigation: {
    nextEl: ".product-slider__btn--next",
    prevEl: ".product-slider__btn--prev",
  },
});
//...........................-->END<--...................................//

  //..........................-->INTERESTING_SLIDER<--..................//
const interestingSwiper = new Swiper(".interesting__slider", {
  navigation: {
    nextEl: ".interesting__btn--next",
    prevEl: ".interesting__btn--prev",
  },

  breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

  //.........................-->END<--..............................//

  //burger
  window.addEventListener("resize", function () {
    // виконуємо дії при зміні розміру екрану

    if (window.innerWidth <= 992) {
      const burger = document.querySelector(".burger");
      const closeBtn = document.querySelector(".close-btn");
      const mobileNav = document.querySelector(".mobile-nav");
      const filterSidebar = document.querySelector(".sidebar");
      const filterBtn = document.querySelector(".filter-btn");
      const filterCloseBtn = document.querySelector(".sidebar__btn");

      burger.addEventListener("click", () => {
        body.classList.add("lock");
        mobileNav.classList.add("open");
      });

      closeBtn.addEventListener("click", () => {
        body.classList.remove("lock");
        mobileNav.classList.remove("open");
      });

      filterBtn.addEventListener("click", () => {
        filterSidebar.classList.add("open");
        body.classList.add("lock");
      });

      filterCloseBtn.addEventListener("click", () => {
        filterSidebar.classList.remove("open");
      });

      document.addEventListener("click", function (e) {
        if (
          e.target !== closeBtn &&
          e.target !== burger &&
          e.target !== mobileNav &&
          e.target !== filterBtn &&
          e.target !== filterSidebar
        ) {
          body.classList.remove("lock");
          mobileNav.classList.remove("open");
          filterSidebar.classList.remove("open");
        }
      });
    }
  });
  /////////////////

  const slider = document.querySelector(".resto__slider");

  let mySwiper;

  function mobilesSlider() {
    if (window.innerWidth <= 576 && slider.dataset.mobile == "false") {
      // створюємо слайдер
      mySwiper = new Swiper(slider, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: true,
        centeredSlidesBounds: true,
        pagination: {
          el: ".resto__dots",
          bulletClass: "resto__dot",
          bulletActiveClass: "resto__dot--active",
          clickable: true,
        },
      });
      slider.dataset.mobile = "true";
    }

    if (window.innerWidth > 576) {
      slider.dataset.mobile = "false";

      const restoSlider = document.querySelector(".resto__slider").swiper;
      if (restoSlider) {
        restoSlider.destroy();
      }
    }
  }

  mobilesSlider();

  window.addEventListener("resize", () => {
    mobilesSlider();
  });
});

//.............-->RANGE-SLIDER<---.....................//
const rangeSlider = document.querySelector(".range__slider");
const inputMin = document.querySelector(".range__input--min");
const inputMax = document.querySelector(".range__input--max");

noUiSlider.create(rangeSlider, {
  start: [100, 1000],
  connect: true,
  padding: [0, 0],
  animate: true,
  cssPrefix: 'noUi-',
  step: 10,
  range: {
    min: 50,
    max: 1200,
  },
});

rangeSlider.noUiSlider.on("update", function (values, handle) {
  // let value = values[handle];
  let value = parseFloat(values[handle]).toFixed(0);
  if (handle) {
    inputMax.value = value;
  } else {
    inputMin.value = value;
  }
});

// Оновлення значень слайдера при зміні input-ів
inputMin.addEventListener("change", function () {
  rangeSlider.noUiSlider.set([this.value, null]);
});

inputMax.addEventListener("change", function () {
  rangeSlider.noUiSlider.set([null, this.value]);
});
//................--->END<---...................//


 const slider2 = document.querySelector(".discount__slider");

 let mySwiper2;

 function mobilSlider() {
   if (window.innerWidth <= 768 && slider2.dataset.mobile == "false") {
     // створюємо слайдер
     mySwiper2 = new Swiper(slider2, {
       slidesPerView: 1,
       slidesPerGroup: 1,
       centeredSlides: true,
       centeredSlidesBounds: true,
       pagination: {
         el: ".discount__dots",
         bulletClass: "discount__dot",
         bulletActiveClass: "discount__dot--active",
         clickable: true,
       },
     });
     slider2.dataset.mobile = "true";
   }

   if (window.innerWidth > 768) {
     slider2.dataset.mobile = "false";

     const discountSlider = document.querySelector(".discount__slider").swiper;
     if (discountSlider) {
       discountSlider.destroy();
     }
   }
 }
 mobilSlider();
 window.addEventListener("resize", () => {
   mobilSlider();
 });

 