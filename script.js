const menuBtn = document.getElementById("img2");
    const dropdown = document.getElementById("dropdownMenu");

    menuBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdown.classList.toggle('open');
    });

    // Закрыть меню при клике вне его
    document.addEventListener('click', function(event) {
      if (!dropdown.contains(event.target) && event.target !== menuBtn) {
        dropdown.classList.remove('open');
      }
    });

   // Совместимый JS
var carousel = document.getElementById("carousel");
var slides = document.getElementsByClassName("slide");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var dotsContainer = document.getElementById("dots");
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var closeBtn = document.getElementById("close");

var totalSlides = slides.length;
var currentIndex = 0;

// Создание точек
for (var i = 0; i < totalSlides; i++) {
    var dot = document.createElement("div");
    dot.className = "dot";
    if (i === 0) {
        dot.className = "dot active";
    }
    (function(index) {
        dot.onclick = function() {
            goToSlide(index);
        };
    })(i);
    dotsContainer.appendChild(dot);
}

// Перейти к слайду
function goToSlide(index) {
    currentIndex = index;
    carousel.style.transform = "translateX(" + (-currentIndex * 106) + "%)";
    
    // Обновить точки
    var dots = document.getElementsByClassName("dot");
    for (var j = 0; j < dots.length; j++) {
        if (j === currentIndex) {
            dots[j].className = "dot active";
        } else {
            dots[j].className = "dot";
        }
    }
}

// Следующий
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
}

// Предыдущий
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
}

// Привязка кнопок
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Автопрокрутка
setInterval(nextSlide, 6000);

// Открытие модалки
function handleCarouselClick(e) {
    var target = e.target || e.srcElement;
    if (target.tagName === "IMG") {
        modalImg.src = target.src;
        modal.className = "modal open";
    }
}
carousel.addEventListener("click", handleCarouselClick);

// Закрытие модалки
function closeModal() {
    modal.className = "modal";
}
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", function(e) {
    if (e.target === modal) closeModal();
});

// Клавиатура
function handleKeyDown(e) {
    var isOpen = modal.className.indexOf("open") !== -1;
    if (isOpen) {
        if (e.key === "Escape" || e.keyCode === 27) {
            closeModal();
        }
    } else {
        if (e.key === "ArrowRight" || e.keyCode === 39) {
            nextSlide();
        } else if (e.key === "ArrowLeft" || e.keyCode === 37) {
            prevSlide();
        }
    }
}
document.addEventListener("keydown", handleKeyDown);


