document.querySelectorAll('a[href*="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    const hrefUrl = this.getAttribute("href").split("#")[0];
    const currentUrl = window.location.pathname.split("/").pop();
    const targetId = this.getAttribute("href").split("#")[1];

    if ((hrefUrl === "" || hrefUrl === currentUrl) && targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

