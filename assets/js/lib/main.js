

$(document).ready(function () {
  $('.owl-best-seller').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1050: {
        items: 4
      }
    }
  })
});
$(document).ready(function () {
  $('.owl-feedback').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1050: {
        items: 3
      }
    }
  })
});

var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});

const totop =document.querySelector(".to-top");

window.addEventListener("scroll" ,() =>{
  if(window.pageYOffset > 100) {
    totop.classList.add("active");
  }
  else{
    totop.classList.remove("active");x
  }
})