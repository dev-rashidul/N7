// Menu Active Color

$(document).on("click", "ul li", function(){
    $(this).addClass("active").siblings().removeClass("active")
})

// Mobile Menu 

const bars = document.querySelector("#bars")
const mobileMenu = document.querySelector(".mobile-sidebar-container")

bars.addEventListener("click", function(){
  this.classList.toggle("active")
  mobileMenu.classList.toggle("active")
})


// Schedule Meeting Form JS

const overlay = document.getElementById("overlay")
const meetingBtn = document.getElementById("sc-meeting")
const meetingBtn2 = document.getElementById("sc-meeting2")
const meeting = document.getElementById("Meeting")
const meetingClose = document.getElementById("schedule-close")

meetingBtn.addEventListener("click", function(){
  meeting.classList.add("active")
  overlay.style.display="block"
})

meetingBtn2.addEventListener("click", function(){
  meeting.classList.add("active")
  overlay.style.display="block"
})

meetingClose.addEventListener("click", function(){
  meeting.classList.remove("active")
  overlay.style.display="none"
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