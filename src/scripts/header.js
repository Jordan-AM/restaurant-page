export default function loadHeader() {
  const header = document.getElementById("header");
  header.textContent = "";

  const nav = document.createElement("nav");
  nav.classList.add("nav-tabs");

  const ul = document.createElement("ul");
  ul.classList.add("nav-tabs-list");

  const home = document.createElement("li");
  home.setAttribute("id", "home");
  home.classList.add("tabItem");

  const heading = document.createElement("h1");
  heading.textContent = "Flavor Haven";

  const menu = document.createElement("li");
  menu.setAttribute("id", "menu");
  menu.classList.add("tabItem");
  menu.textContent = "Menu";

  const contact = document.createElement("li");
  contact.setAttribute("id", "contact");
  contact.classList.add("tabItem");
  contact.textContent = "Contact";

  home.appendChild(heading);
  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);
  nav.appendChild(ul);
  header.appendChild(nav);
}
