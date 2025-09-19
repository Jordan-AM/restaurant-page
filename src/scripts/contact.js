import drinkingParty from "./../assets/images/alyona-yankovska.jpg";

export default function loadContact() {
  const content = document.getElementById("content");
  content.textContent = ""; // Clear previous content

  const contact = document.createElement("div");
  contact.classList.add("contact");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  heading.classList.add("heading");

  // Phone Start
  const phone = document.createElement("div");
  const phoneSpan = document.createElement("span");
  const phoneContent = document.createElement("p");

  phoneSpan.textContent = "Phone:";
  phoneSpan.classList.add("bold-contact");

  phoneContent.textContent = " (555) 123-4567";
  phoneContent.classList.add("contact-content");

  phone.classList.add("phone");
  phone.appendChild(phoneSpan);
  phone.appendChild(phoneContent);
  // Phone End

  // Email Start
  const email = document.createElement("div");
  const emailSpan = document.createElement("span");
  const emailContent = document.createElement("p");

  emailSpan.textContent = "Email:";
  emailSpan.classList.add("bold-contact");

  emailContent.textContent = " hello@flavorhaven.com";
  emailContent.classList.add("contact-content");

  email.classList.add("email");
  email.appendChild(emailSpan);
  email.appendChild(emailContent);
  // Email Ends

  const address = document.createElement("div");
  const addressSpan = document.createElement("span");
  const addressContent = document.createElement("p");

  addressSpan.textContent = "Address:";
  addressSpan.classList.add("bold-contact");

  addressContent.textContent = " 123 Culinary Lane, Foodville";
  addressContent.classList.add("contact-content");

  address.classList.add("address");
  address.appendChild(addressSpan);
  address.appendChild(addressContent);
  // Address Ends
  const hoursDiv = document.createElement("div");
  hoursDiv.classList.add("hours");
  // Data: Opening hours for each day
  const restaurantHours = {
    Monday: "9:00 AM - 9:00 PM",
    Tuesday: "9:00 AM - 9:00 PM",
    Wednesday: "9:00 AM - 9:00 PM",
    Thursday: "9:00 AM - 10:00 PM",
    Friday: "9:00 AM - 11:00 PM",
    Saturday: "10:00 AM - 11:00 PM",
    Sunday: "Closed",
  };
  // Create the table
  const table = document.createElement("table");
  table.classList.add("table");

  // Create header row
  const headerRow = document.createElement("tr");
  ["Day", "Opening Hours"].forEach((text) => {
    const th = document.createElement("th");
    th.classList.add("theader");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Add data rows
  Object.entries(restaurantHours).forEach(([day, hours]) => {
    const row = document.createElement("tr");

    [day, hours].forEach((text) => {
      const td = document.createElement("td");
      td.classList.add("tdata");
      td.textContent = text;
      row.appendChild(td);
    });

    table.appendChild(row);
  });

  const bgFruit = document.createElement("img");
  bgFruit.classList.add("homeBackground");
  bgFruit.src = drinkingParty;
  bgFruit.alt = "A Drinking Party";

  const contactWrapper = document.createElement("section");
  contactWrapper.classList.add("contact-wrapper");

  contact.appendChild(heading);
  contact.appendChild(phone);
  contact.appendChild(email);
  contact.appendChild(address);
  hoursDiv.appendChild(table);
  contactWrapper.appendChild(contact);
  contactWrapper.appendChild(hoursDiv);
  content.appendChild(contactWrapper);
  content.appendChild(bgFruit);
}
