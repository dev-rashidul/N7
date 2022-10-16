// Menu Active Color

$(document).on("click", "ul li", function(){
    $(this).addClass("active").siblings().removeClass("active")
})

// Mobile Menu 

const bars = document.querySelector("#bars")
const mobileMenu = document.querySelector(".mobile-sidebar-container")

bars.addEventListener("click", function(){
  mobileMenu.classList.toggle("active")
})

// Clients Slider

$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});