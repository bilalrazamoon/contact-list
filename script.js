const addContactForm = document.getElementById("contactForm");

const addContactModal = new bootstrap.Modal("#addContactModal");

const nameEl = addContactForm.elements.name;
const emailEl = addContactForm.elements.email;
const phoneEl = addContactForm.elements.phone;

let count = 0;

const contacts = [
  {
    name: "Bilal",
    email: "bilalrazamoon@gmail.com",
    phone: "+923009294343",
  },
  {
    name: "Ahmed",
    email: "hafizahmedattari@gmail.com",
    phone: "+923009294343",
  },
];

for (let index = 0; index < contacts.length; index++) {
  const contact = contacts[index];
  addToTable(++count, contact.name, contact.email, contact.phone);
}

function addContact(event) {
  event.preventDefault();
  const name = nameEl.value;
  const email = emailEl.value;
  const phone = phoneEl.value;

  addToTable(++count, name, email, phone);

  addContactModal.hide();

  addContactForm.reset();
}

function addToTable(number, name, email, phone) {
  const contactTbody = document.getElementById("contactTbody");

  const row = document.createElement("tr");

  // first column
  const serialNumberCol = document.createElement("th");
  serialNumberCol.innerText = number;
  row.appendChild(serialNumberCol);

  // second column
  const nameCol = document.createElement("td");
  nameCol.innerText = name;
  row.appendChild(nameCol);

  // third column
  const emailCol = document.createElement("td");
  emailCol.innerText = email;
  row.appendChild(emailCol);

  // fourth column
  const phoneCol = document.createElement("td");
  phoneCol.innerText = phone;
  row.appendChild(phoneCol);

  // fifth column
  const actionsCol = document.createElement("td");

  const editButton = document.createElement("button");
  editButton.className = "btn btn-secondary me-1";
  editButton.innerText = "Edit";

  actionsCol.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger";
  deleteButton.innerText = "Delete";

  actionsCol.appendChild(deleteButton);

  row.appendChild(actionsCol);

  contactTbody.appendChild(row);
}

addContactForm.addEventListener("submit", addContact);

// var = let
// --------
// let - variable
// const - constant
