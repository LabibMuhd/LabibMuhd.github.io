// DOM Elements
const list = document.querySelectorAll(".admin-nav li");
const dashBtn = document.querySelector(".dash");
const userbtn = document.querySelector(".user");
const shipmentBtn = document.querySelector(".shipments");
const addShipmentForm = document.querySelector(".add-ship");
const settingsBtn = document.querySelector(".setting");
const editBtn = document.querySelector(".edit-btn");
const exitBtn = document.querySelector(".exit-btn");
const noBtn = document.querySelector(".no-btn");

// Section Elements
const dashboard = document.querySelector(".dashboard");
const users = document.querySelector(".users-section");
const shipment = document.querySelector(".shipment-section");
const shipmentForm = document.querySelector("#shipment-form");
const settings = document.querySelector(".settings-section");
const settingsForm = document.querySelector("#settings-form");
const settingsBox = document.querySelector(".settings-box");
const popupDiv = document.querySelector(".popup-div");
const shipTable = document.querySelector(".ship-table");
const addShipmentIcon = document.querySelector(".add-ship-icon");
const closeShipmentIcon = document.querySelector(".close-ship-icon");

// Menu Elements
const toggle = document.querySelector(".menu-box");
const navigation = document.querySelector(".admin-nav");
const main = document.querySelector(".main");

// Utility Functions
const toggleVisibility = (section, action) => {
  section.classList[action]("hidden");
};

// Section Toggle Functions
const showSection = (section) => {
  toggleVisibility(dashboard, "add");
  toggleVisibility(users, "add");
  toggleVisibility(shipment, "add");
  toggleVisibility(settings, "add");

  section.classList.remove("hidden");
};

const toggleShipmentForm = () => {
  addShipmentIcon.classList.toggle("hidden");
  shipTable.classList.toggle("hidden");
  shipmentForm.classList.toggle("hidden");
  closeShipmentIcon.classList.toggle("hidden");
};

// Active Link Handling
const activeLink = function (e) {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  e.target.classList.add("hovered");
};

// Navigation Collapse
const collapseNav = () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// Event Listeners

// Menu toggle
toggle.addEventListener("click", collapseNav);

// Nav Item Click
list.forEach((item) =>
  item.addEventListener("click", (e) => {
    activeLink(e);
    collapseNav();
  })
);

// Section Show/Hide for Dashboard, Users, and Shipments
dashBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(dashboard);
});

userbtn.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(users);
});

shipmentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(shipment);
});

// Shipment Form Toggle
addShipmentForm.addEventListener("click", (e) => {
  e.preventDefault();
  toggleShipmentForm();
});

// Edit Shipment Form Toggle (for multiple edit forms)
document
  .querySelectorAll(".edit")
  .forEach((item) => item.addEventListener("click", toggleShipmentForm));

// Delete Shipment Confirmation Popup
document.querySelectorAll(".delete").forEach((item) => {
  item.addEventListener("click", () => {
    popupDiv.classList.toggle("hidden");
  });
});

// Settings Section
settingsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(settings);
  settingsForm.classList.add("hidden");
  settingsBox.classList.remove("hidden");
});

editBtn.addEventListener("click", () => {
  settingsForm.classList.remove("hidden");
  settingsBox.classList.add("hidden");
});

exitBtn.addEventListener("click", () => {
  settingsForm.classList.add("hidden");
  settingsBox.classList.remove("hidden");
});

// Popup Confirmation (Delete Action)
noBtn.addEventListener("click", () => {
  popupDiv.classList.toggle("hidden");
});
