import strawberry from "./../assets/images/strawberry-jalapeno-margarita.jpg";

export default function loadMenu() {
  const content = document.getElementById("content");
  content.textContent = ""; // Clear previous content

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  heading.classList.add("heading");

  const items = [
    { name: "Spicy Shrimp Tacos", description: "Served with mango salsa and lime crema.", price: "$5.50"},
    { name: "Truffle Mushroom Risotto", description: "Creamy arborio rice with wild mushrooms and truffle oil.", price: "$6.00" },
    { name: "Charcoal-Grilled Steak", description: "Juicy sirloin with herb butter and roasted potatoes.", price: "$4.00" },
  ];

  const list = document.createElement("ul");
  list.classList.add("list");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("li");

    const itemName = document.createElement("strong");
    itemName.textContent = item.name;
    itemName.classList.add("itemName");

    const itemDesc = document.createElement("p");
    itemDesc.textContent = item.description;
    itemDesc.classList.add("description");

    const itemPrice = document.createElement("span")
    itemPrice.textContent = item.price
    itemPrice.classList.add("itemPrice")

    li.appendChild(itemName);
    li.appendChild(itemDesc);
    li.appendChild(itemPrice)
    list.appendChild(li);
  });

  const bgFruit = document.createElement("img");
  bgFruit.classList.add("homeBackground");
  bgFruit.src = strawberry;
  bgFruit.alt = "Strawberry Cocktail";

  menuDiv.appendChild(heading);
  menuDiv.appendChild(list);
  content.appendChild(bgFruit);
  content.appendChild(menuDiv);
}
