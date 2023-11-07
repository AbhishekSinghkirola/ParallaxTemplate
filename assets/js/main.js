const navbaranimation = (function () {
  document.addEventListener("scroll", function (e) {
    const navbarEl = document.querySelector("#navbar");
    if (
      document.body.scrolltop > 56 ||
      document.documentElement.scrollTop > 56
    ) {
      navbarEl.classList.add("navbar-ani");
    } else {
      navbarEl.classList.remove("navbar-ani");
    }
  });
})();
