const header = document.getElementById("header");
const nextBtn = document.getElementById("right");
const prevBtn = document.getElementById("left");
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

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = sectionNew.length - 1; // Va al último elemento si está en el primero
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
  "assets/images/patronIncautaciones/1.png",
  "assets/images/patronIncautaciones/2.png",
  "assets/images/patronIncautaciones/3.png",
  "assets/images/patronIncautaciones/4.png",
];

// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = {curImg: 0};

// create tween
var tween = TweenMax.to(obj, 0.5,
  {
    curImg: images.length - 1,	// animate propery curImg to number of images
    roundProps: "curImg",				// only integers so it can be used as an array index
    repeat: 3,									// repeat 3 times
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
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

// handle form change
$("form.move input[name=duration]:radio").change(function () {
  scene.duration($(this).val());
});
})


$( document ).ready( function() {
  var images = [
  "assets/images/scrollNavieras/C1.png",
  "assets/images/scrollNavieras/C2.png",
  "assets/images/scrollNavieras/C3.png",
  "assets/images/scrollNavieras/C4.png",
  "assets/images/scrollNavieras/C5.png",
  "assets/images/scrollNavieras/C6.png",
];

// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = {curImg: 0};

// create tween
var tween = TweenMax.to(obj, 0.5,
  {
    curImg: images.length - 1,	// animate propery curImg to number of images
    roundProps: "curImg",				// only integers so it can be used as an array index
    repeat: 3,									// repeat 3 times
    immediateRender: true,			// load first image automatically
    ease: Linear.easeNone,			// show every image the same ammount of time
    onUpdate: function () {
      $("#myimg-2").attr("src", images[obj.curImg]); // set the image source
    }
  }
);

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger-2", duration: 300})
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

// handle form change
$("form.move input[name=duration]:radio").change(function () {
  scene.duration($(this).val());
});
})