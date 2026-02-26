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