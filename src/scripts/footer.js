export default function loadFooter() {
  const footer = document.querySelector("#footer");
  footer.textContent = "";

  const footerContainer = document.createElement("div");
  footerContainer.classList.add("footerContainer")

  const para = document.createElement("p");
  para.classList.add("credits");
  para.textContent = "Copyright © 2025 - Made by ";

  const githubLink = document.createElement("a");
  githubLink.setAttribute("href", "https://github.com/Jordan-AM");
  githubLink.textContent = "Jordan";

  // Social media
  const socialMedia = document.createElement("ul");
  socialMedia.classList.add("social-media");

  // Array of Font Awesome brand icon classes
  const icons = ["fab fa-instagram", "fab fa-facebook", "fab fa-twitter", "fab fa-linkedin"];

  // Create each <li> with an <i> icon
  icons.forEach((iconClass) => {
    const li = document.createElement("li");

    const icon = document.createElement("i");
    icon.className = iconClass;

    li.appendChild(icon);
    socialMedia.appendChild(li);
  });

  para.appendChild(githubLink);
  footerContainer.appendChild(para);
  footerContainer.appendChild(socialMedia);
  footer.appendChild(footerContainer);
}
