const stickyNav = document.querySelector(".stickyNav");
const sticky = stickyNav.offsetTop;
const navColor = document.querySelector(".nav");
const navColor2 = document.querySelector(".nav2");

function stickyScroll() {
  if (window.scrollY >= sticky) {
    stickyNav.classList.add("sticky");
    navColor.style.color = "rgb(20, 51, 77)";
    navColor2.style.color = "rgb(20, 51, 77)";
  } else {
    stickyNav.classList.remove("sticky");
  }
}

window.addEventListener("scroll", stickyScroll);
