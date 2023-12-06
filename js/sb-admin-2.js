document.getElementById('sidebarToggleTop').addEventListener('click', function (e) {
  document.body.classList.toggle("sidebar-toggled");
  document.querySelector(".sidebar").classList.toggle("toggled");
  if (document.querySelector(".sidebar").classList.contains("toggled")) {
    document.querySelectorAll('.sidebar .collapse').forEach(function (collapse) {
      collapse.collapse('hide');
    });
  }
});

// Close any open menu accordions when window is resized below 768px
window.addEventListener('resize', function () {
  if (window.innerWidth < 768) {
    document.querySelectorAll('.sidebar .collapse').forEach(function (collapse) {
      collapse.collapse('hide');
    });
  }

  // Toggle the side navigation when window is resized below 480px
  if (window.innerWidth < 480 && !document.querySelector(".sidebar").classList.contains("toggled")) {
    document.body.classList.add("sidebar-toggled");
    document.querySelector(".sidebar").classList.add("toggled");
    document.querySelectorAll('.sidebar .collapse').forEach(function (collapse) {
      collapse.collapse('hide');
    });
  }
});

// Prevent the content wrapper from scrolling when the fixed side navigation hovered over
var sidebar = document.querySelector('body.fixed-nav .sidebar');
if (sidebar) {
  sidebar.addEventListener('wheel', function (e) {
    if (window.innerWidth > 768) {
      var delta = e.wheelDelta || -e.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });
}

// Scroll to top button appear
window.addEventListener('scroll', function () {
  var scrollDistance = window.scrollY;
  var scrollToTopButton = document.querySelector('.scroll-to-top');
  if (scrollDistance > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Smooth scrolling using vanilla JavaScript
document.querySelectorAll('a.scroll-to-top').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      var offsetTop = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
