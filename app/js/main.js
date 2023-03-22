document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

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

});

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger-menu_button", ".burger-menu_lines");
  let links = menu.find(".burger-menu_link");
  let overlay = menu.find(".burger-menu_overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-menu_active");

    if (menu.hasClass("burger-menu_active")) {
      $("body").css("overlow", "hidden");
    } else {
      $("body").css("overlow", "visible");
    }
  }
}

burgerMenu(".burger-menu");
