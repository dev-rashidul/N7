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


// Search Form Click

const search = document.querySelector(".search")
const search2 = document.querySelector(".search2")
const searchForm = document.getElementById("Search")

search.addEventListener("click", function(){
  searchForm.classList.toggle("active")
})

search2.addEventListener("click", function(){
  searchForm.classList.toggle("active")
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


// Search Form Range JavaScript


function getVals(){
  // Get slider values
  let parent = this.parentNode;
  let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat( slides[0].value );
    let slide2 = parseFloat( slides[1].value );
  // Neither slider will clip the other, so make sure we determine which is larger
  if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }

  
  let displayElement = parent.getElementsByClassName("range-values")[0];

//innerHTML property allows Javascript code to manipulate a website being displayed
      displayElement.innerHTML = slide2 + "AED" + " - " + slide1 + "AED";
}

window.onload = function(){
  // Initialize Sliders
  let sliderSections = document.getElementsByClassName("range-slider");
      for( let x = 0; x < sliderSections.length; x++ ){
        let sliders = sliderSections[x].getElementsByTagName("input");
        for( let y = 0; y < sliders.length; y++ ){
          if( sliders[y].type ==="range" ){
     //oninput attribute fires when the value of an <input> element is changed
            sliders[y].oninput = getVals;
            // Manually trigger event first time to display values
            sliders[y].oninput();
          }
        }
      }
}


// Counter JS

jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 5,
    time: 1000,
  });
});
