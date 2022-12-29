const featuresArrowUp = document.getElementById("features-arrow-up");
const featuresArrowDown = document.getElementById("features-arrow-down");
const featuresHeader = document.getElementById("features-header");
const featuresMenu = document.getElementById("features-menu");

const companyArrowUp = document.getElementById("company-arrow-up");
const companyArrowDown = document.getElementById("company-arrow-down");
const companyHeader = document.getElementById("company-header");
const companyMenu = document.getElementById("company-menu");

const mobileMenu = document.getElementById("mobile-menu-icon");
const mobileMenuClose = document.getElementById("mobile-close-menu");
const header = document.getElementById("header");

// features menu drop down
// -----------------------
featuresHeader.addEventListener("click", function () {
  if (
    featuresMenu.style.display == "grid" &&
    featuresArrowUp.style.display == "block"
  ) {
    featuresMenu.style.display = "none";
    featuresArrowDown.style.display = "block";
    featuresArrowUp.style.display = "none";
  } else {
    featuresMenu.style.display = "grid";
    featuresArrowDown.style.display = "none";
    featuresArrowUp.style.display = "block";
  }
});
featuresArrowDown.addEventListener("click", function () {
  featuresMenu.style.display = "grid";
  featuresArrowDown.style.display = "none";
  featuresArrowUp.style.display = "block";
});
featuresArrowUp.addEventListener("click", function () {
  featuresMenu.style.display = "none";
  featuresArrowDown.style.display = "block";
  featuresArrowUp.style.display = "none";
});

// company menu drop down
// ----------------------
companyHeader.addEventListener("click", function () {
  if (
    companyMenu.style.display == "flex" &&
    companyArrowUp.style.display == "block"
  ) {
    companyMenu.style.display = "none";
    companyArrowDown.style.display = "block";
    companyArrowUp.style.display = "none";
  } else {
    companyMenu.style.display = "flex";
    companyArrowDown.style.display = "none";
    companyArrowUp.style.display = "block";
  }
});
companyArrowDown.addEventListener("click", function () {
  companyMenu.style.display = "flex";
  companyArrowDown.style.display = "none";
  companyArrowUp.style.display = "block";
});
companyArrowUp.addEventListener("click", function () {
  companyMenu.style.display = "none";
  companyArrowDown.style.display = "block";
  companyArrowUp.style.display = "none";
});

// mobile menu
// ---------------

mobileMenu.addEventListener("click", function () {
  header.style.display = "flex";
});

mobileMenuClose.addEventListener("click", function () {
  header.style.display = "none";
});
