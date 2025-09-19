console.log("Confirmed: Webpack is working.");
import loadHome from "./scripts/home.js";
import loadMenu from "./scripts/menu.js";
import loadContact from "./scripts/contact.js";
import loadHeader from "./scripts/header.js";
import loadFooter from "./scripts/footer.js";
import "./styles/style.css";

document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const contactBtn = document.getElementById("contact");

  homeBtn.addEventListener("click", () => {
    loadHome();
  });
  menuBtn.addEventListener("click", () => {
    loadMenu();
  });
  contactBtn.addEventListener("click", () => {
    loadContact();
  });
});
// Load by default on page Load
loadHeader();
loadMenu();
loadFooter();
