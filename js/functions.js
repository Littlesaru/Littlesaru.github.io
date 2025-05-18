function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("hidden");
  }
// Send Email
function sendEmail(e) {
    e.preventDefault();
    const name =
      document.getElementById("name")?.value + "- Contact From Portfolio";
    const body = document.getElementById("body")?.value;
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = `mailto:nimo.arrmann123@gmail.com?subject=${name}&body=${body}`;
    a.click();
  }

// swiper-setup.js
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
