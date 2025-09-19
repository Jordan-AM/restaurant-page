import cocktails from "./../assets/images/kobby.jpg";

export default function loadHome() {
  const content = document.getElementById("content");
  content.textContent = ""; // Clear previous content

  const homeContainer = document.createElement("section");
  homeContainer.classList.add("home-container");

  // Home intro
  const intro = document.createElement("div");
  intro.classList.add("intro");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Flavor Haven!";
  heading.classList.add("heading");

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptatum esse, veniam molestiae quibusdam optio aperiam aspernatur obcaecati ut pariatur dignissimos accusamus. Esse delectus quasi architecto quos magnam sequi quae voluptate dicta assumenda minima iusto, dolorum modi, maxime voluptatibus fugiat animi aspernatur iure cum temporibus accusamus quis repellendus quod pariatur!";
  description.classList.add("description");

  const cta = document.createElement("button");
  cta.classList.add("cta-button");
  cta.textContent = "Oder Now!";

  const bgFruit = document.createElement("img");
  bgFruit.classList.add("homeBackground");
  bgFruit.src = cocktails;
  bgFruit.alt = "Three Cocktails";

  intro.appendChild(heading);
  intro.appendChild(description);
  homeContainer.appendChild(intro);
  homeContainer.appendChild(cta);
  content.appendChild(bgFruit);
  content.appendChild(homeContainer);
}
