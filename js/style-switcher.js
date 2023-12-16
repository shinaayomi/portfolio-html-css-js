/* =================== Toggle style switcher =================== */
const styleSwitchertoggle = document.querySelector(".style-switcher-toggler");
styleSwitchertoggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open-switcher");
});

// hede style switcher on scroll
window.addEventListener("scroll", () => {
  if (
    document
      .querySelector(".style-switcher")
      .classList.contains("open-switcher")
  ) {
    document.querySelector(".style-switcher").classList.remove("open-switcher");
  }
});

/* =================== Theme color =================== */
