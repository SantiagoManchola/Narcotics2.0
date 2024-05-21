const header = document.getElementById("header");
const nextBtn = document.getElementById("right");
const sectionNew = document.querySelectorAll(".sectionNew");

// Function to apply classes based on the scroll

function isScrolled(value) {
  if (window.scrollY > value) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", () => {
  isScrolled(0);
});

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex < sectionNew.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Vuelve al primer elemento si llega al final
    }
    updateCarousel();
});

function updateCarousel() {
    const newPosition = -currentIndex * 100;
    sectionNew.forEach((e) => {
        e.style.transform = `translateX(${newPosition}%)`;
    });
}

$( document ).ready( function() {
  var images = [
    "assets/images/patronIncautaciones/1.webp",
    "assets/images/patronIncautaciones/2.webp",
    "assets/images/patronIncautaciones/3.webp",
    "assets/images/patronIncautaciones/4.webp",
    "assets/images/patronIncautaciones/5.webp",
    "assets/images/patronIncautaciones/6.webp",
    "assets/images/patronIncautaciones/7.webp",
    "assets/images/patronIncautaciones/8.webp",
    "assets/images/patronIncautaciones/9.webp",
    "assets/images/patronIncautaciones/10.webp",
    "assets/images/patronIncautaciones/11.webp",
    "assets/images/patronIncautaciones/12.webp",
    "assets/images/patronIncautaciones/13.webp",
    "assets/images/patronIncautaciones/14.webp",
    "assets/images/patronIncautaciones/15.webp",
    "assets/images/patronIncautaciones/16.webp",
    "assets/images/patronIncautaciones/17.webp",
    "assets/images/patronIncautaciones/18.webp",
    "assets/images/patronIncautaciones/19.webp",
    "assets/images/patronIncautaciones/20.webp",
    "assets/images/patronIncautaciones/21.webp",
    "assets/images/patronIncautaciones/22.webp",
    "assets/images/patronIncautaciones/23.webp",
    "assets/images/patronIncautaciones/24.webp",
    "assets/images/patronIncautaciones/25.webp",
    "assets/images/patronIncautaciones/26.webp",
    "assets/images/patronIncautaciones/27.webp",
    "assets/images/patronIncautaciones/28.webp",
    "assets/images/patronIncautaciones/29.webp",
    "assets/images/patronIncautaciones/30.webp",
    "assets/images/patronIncautaciones/31.webp",
    "assets/images/patronIncautaciones/32.webp",
    "assets/images/patronIncautaciones/33.webp",
    "assets/images/patronIncautaciones/34.webp",
    "assets/images/patronIncautaciones/35.webp",
    "assets/images/patronIncautaciones/36.webp",
    "assets/images/patronIncautaciones/37.webp",
    "assets/images/patronIncautaciones/38.webp",
    "assets/images/patronIncautaciones/39.webp",
    "assets/images/patronIncautaciones/40.webp",
    "assets/images/patronIncautaciones/41.webp",
    "assets/images/patronIncautaciones/42.webp",
    "assets/images/patronIncautaciones/43.webp",
    "assets/images/patronIncautaciones/44.webp",
    "assets/images/patronIncautaciones/45.webp",
    "assets/images/patronIncautaciones/46.webp",
    "assets/images/patronIncautaciones/47.webp",
    "assets/images/patronIncautaciones/48.webp",
    "assets/images/patronIncautaciones/49.webp",
    "assets/images/patronIncautaciones/50.webp",
    "assets/images/patronIncautaciones/51.webp",
    "assets/images/patronIncautaciones/52.webp",
    "assets/images/patronIncautaciones/53.webp",
    "assets/images/patronIncautaciones/54.webp",
    "assets/images/patronIncautaciones/55.webp",
    "assets/images/patronIncautaciones/56.webp",    
];


// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = {curImg: 0};

// create tween
var heightvp = window.innerHeight 
var imgHeight = document.getElementById("myimg").clientHeight
var fullHeight = ((heightvp-imgHeight)/2)

var tween = TweenMax.to(obj, 0.9,
  {
    curImg: images.length - 1,	// animate propery curImg to number of images
    roundProps: "curImg",				// only integers so it can be used as an array index
    immediateRender: true,			// load first image automatically
    ease: Linear.easeNone,			// show every image the same ammount of time
    onUpdate: function () {
      $("#myimg").attr("src", images[obj.curImg]); // set the image source
    }
  }
);

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: imgHeight, triggerHook : 0.5})
        .setTween(tween)
        /* .addIndicators() // add indicators (requires plugin) */
        .addTo(controller);
})



  var images = [
  "assets/images/scrollNavieras/C1.webp",
  "assets/images/scrollNavieras/C2.webp",
  "assets/images/scrollNavieras/C3.webp",
  "assets/images/scrollNavieras/C4.webp",
  "assets/images/scrollNavieras/C5.webp",
  "assets/images/scrollNavieras/C6.webp",
];
var obj = {curImg: 0, scrollTop : 0};

var tween = TweenMax.to(obj, 0.5,
  {
    scrollTop: 1,
    curImg: images.length - 1,
    roundProps: "curImg",
    immediateRender: true,
    ease: Linear.easeNone,
    onUpdate: function () {
      $("#imagesequence-2").css("background-image", `url('${images[obj.curImg]}')`);
      $(".animatedText").css("transform", "translateY(" + (-600* obj.scrollTop) + "vh)");  
    }
  }
);

var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger-2", duration: "1200%", triggerHook : 0})
        .setTween(tween)
        .setPin("#imagesequence-2")
        /* .addIndicators() */
        .addTo(controller);


