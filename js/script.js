// Défilement fluide vers les ancres de la page
document.querySelectorAll('a[href*="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    const hrefUrl = this.getAttribute("href").split("#")[0];
    const currentUrl = window.location.pathname.split("/").pop();
    const targetId = this.getAttribute("href").split("#")[1];

    // Ne gérer que les ancres présentes sur la page actuelle
    if ((hrefUrl === "" || hrefUrl === currentUrl) && targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Gestion basique du formulaire de contact
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Merci pour votre message, nous vous répondrons rapidement !");
    contactForm.reset();
  });
}
