

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
  });
  
  $('.owl-feedback').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    center: true,
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
  });
});
