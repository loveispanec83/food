

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const body = document.querySelector("body");

  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

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

  //burger
  window.addEventListener("resize", function () {
    // виконуємо дії при зміні розміру екрану

    // додайте свій код тут
    if (window.innerWidth <= 992) {
      console.log("бургер");
      const burger = document.querySelector(".burger");
      closeBtn = document.querySelector(".close-btn");
      const mobileNav = document.querySelector(".mobile-nav");

      burger.addEventListener("click", () => {
        body.classList.add("lock");
        mobileNav.classList.add("open");
      });

      closeBtn.addEventListener("click", () => {
        body.classList.remove("lock");
        mobileNav.classList.remove("open");
      });

      document.addEventListener("click", function (e) {
        if (
          e.target !== closeBtn &&
          e.target !== burger &&
          e.target !== mobileNav
        ) {
          body.classList.remove("lock");
          mobileNav.classList.remove("open");
        }
      });
    }
  });

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