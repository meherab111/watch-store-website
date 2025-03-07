import "./style.css";
import products from "./api/products.json";
import { showProductsFunc } from "./productCart.js";

// header burger icon

const hamburger = document.querySelector(".hamburger-icon");

const navMenu = document.querySelector(".nav-menu");

const navLink = document.querySelectorAll(".navbar-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLink.forEach((curElem) => {
  curElem.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 70) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// home image rotation functionality

let homeImgCount = 1;

let homeImage = document.querySelector(".hero-main--img");

let imageLeft = document.querySelector(".image-left");

let imageRight = document.querySelector(".image-right");

setInterval(() => {
  homeImage.src = `./public/images/hero-section-img-${homeImgCount}.webp`;

  imageLeft.src = `./public/images/image-${homeImgCount * 2}.1.webp`;

  imageRight.src = `./public/images/image-${homeImgCount * 3}.webp`;

  homeImgCount++;

  if (homeImgCount === 5) {
    homeImgCount = 1;
  }
}, 2500);

showProductsFunc(products);
