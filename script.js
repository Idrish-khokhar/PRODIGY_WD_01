        // Add a scroll event listener to change the background color when scrolled
        window.addEventListener('scroll', function () {
          var header = document.querySelector('header');
          var scrollPosition = window.scrollY;

          if (scrollPosition > 50) {
              header.style.backgroundColor = '#555';
          } else {
              header.style.backgroundColor = '#333';
          }
      });
