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
const sections = document.querySelectorAll('.sectionNew');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// Función para actualizar la visibilidad de los botones
function updateButtons() {
  leftBtn.style.display = currentIndex === 0 ? 'none' : 'block';
  rightBtn.style.display = currentIndex === sections.length - 1 ? 'none' : 'block';
}

// Función para actualizar la posición del carrusel
function updateCarousel() {
  const newPosition = -currentIndex * 100;
  sections.forEach((e) => {
    e.style.transform = `translateX(${newPosition}%)`;
  });
  updateButtons();
}

// Función para inicializar los event listeners del carrusel
function enableCarousel() {
  leftBtn.addEventListener('click', handleLeftClick);
  rightBtn.addEventListener('click', handleRightClick);
  updateButtons();
}

// Función para eliminar los event listeners del carrusel
function disableCarousel() {
  leftBtn.removeEventListener('click', handleLeftClick);
  rightBtn.removeEventListener('click', handleRightClick);
  leftBtn.style.display = 'none';
  rightBtn.style.display = 'none';
  sections.forEach((e) => {
    e.style.transform = 'translateX(0)';
  });
}

// Función para manejar el clic en el botón izquierdo
function handleLeftClick() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

// Función para manejar el clic en el botón derecho
function handleRightClick() {
  if (currentIndex < sections.length - 1) {
    currentIndex++;
    updateCarousel();
  }
}

// Media query para detectar el ancho de la pantalla
const mediaQuery = window.matchMedia('(max-width: 1050px)');

// Listener para cambios en el ancho de la pantalla
function handleMediaChange(e) {
  if (e.matches) {
    enableCarousel();
  } else {
    disableCarousel();
  }
}

// Inicializar el estado según el tamaño de la pantalla al cargar la página
handleMediaChange(mediaQuery);

// Añadir el listener para cambios en el tamaño de la pantalla
mediaQuery.addEventListener('change', handleMediaChange);



$(document).ready(function() {
  var imageUrlsDesktop = [
      "assets/images/scrollNavieras/C1.webp",
      "assets/images/scrollNavieras/C2.webp",
      "assets/images/scrollNavieras/C3.webp",
      "assets/images/scrollNavieras/C4.webp",
      "assets/images/scrollNavieras/C5.webp",
      "assets/images/scrollNavieras/C6.webp",
  ];

  var imageUrlsMobile = [
      "assets/images/scrollNavieras/C1Mobile.webp",
      "assets/images/scrollNavieras/C2Mobile.webp",
      "assets/images/scrollNavieras/C3Mobile.webp",
      "assets/images/scrollNavieras/C4Mobile.webp",
      "assets/images/scrollNavieras/C5Mobile.webp",
      "assets/images/scrollNavieras/C6Mobile.webp",
  ];

  var images = [];
  var imagesLoaded = 0;

  // Función para determinar el grupo de imágenes a utilizar
  function getImageUrls() {
      return window.innerWidth <= 1200 ? imageUrlsMobile : imageUrlsDesktop;
  }

  // Precargar imágenes
  function preloadImages(urls, callback) {
      urls.forEach(function(url, index) {
          images[index] = new Image();
          images[index].src = url;
          images[index].onload = function() {
              imagesLoaded++;
              if (imagesLoaded === urls.length) {
                  callback();
              }
          };
      });
  }

  // Función para iniciar ScrollMagic después de cargar las imágenes
  function initScrollMagic() {
      var obj = { curImg: 0, scrollTop: 0 };

      var tween = TweenMax.to(obj, 0.5, {
          scrollTop: 1,
          curImg: images.length - 1,
          roundProps: "curImg",
          immediateRender: true,
          ease: Linear.easeNone,
          onUpdate: function() {
              $("#imagesequence-2").css({
                  "background-image": `url('${images[obj.curImg].src}')`,
                  "background-size": "cover",
              });
              $(".animatedText").css("transform", "translateY(" + (-600 * obj.scrollTop) + "vh)");
          }
      });

      var controller = new ScrollMagic.Controller();

      // build scene
      var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-2", duration: "1200%", triggerHook: 0 })
          .setTween(tween)
          .setPin("#imagesequence-2")
          .addTo(controller);
  }

  // Precargar imágenes y luego iniciar ScrollMagic
  preloadImages(getImageUrls(), initScrollMagic);
});
