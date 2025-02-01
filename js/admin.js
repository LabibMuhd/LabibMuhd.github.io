const listHover = document.querySelectorAll(".admin-nav li");
const dashBtn = document.querySelector(".dash");
const dashboard = document.querySelector(".dashboard");
const users = document.querySelector(".users-section");
const userbtn = document.querySelector(".user");
const shipment = document.querySelector(".shipment-section");
const shipmentBtn = document.querySelector(".shipments");
const shipmentForm = document.querySelector("#shipment-form");
const addShipmentForm = document.querySelector(".add-ship");
const addShipmentIcon = document.querySelector(".add-ship-icon");
const closeShipmentIcon = document.querySelector(".close-ship-icon");
const editShipmentForm = document.querySelectorAll(".edit");
const deleteShipmentForm = document.querySelectorAll(".delete");
const settings = document.querySelector(".settings-section");
const cardHeader = document.querySelector(".head");
const shipTable = document.querySelector(".ship-table");
const settingsBtn = document.querySelector(".setting");
const settingsForm = document.querySelector("#settings-form");
const editBtn = document.querySelector(".edit-btn");
const exitBtn = document.querySelector(".exit-btn");
const settingsBox = document.querySelector(".settings-box");
const popupDiv = document.querySelector(".popup-div");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const toggleForm = function () {
  shipmentForm.classList.toggle("hidden");
};
const toggleTable = function () {
  shipTable.classList.toggle("hidden");
};
const toggleDashboard = function () {
  dashboard.classList.toggle("hidden");
};
const toggleUsers = function () {
  users.classList.toggle("hidden");
};
const toggleShipment = function () {
  shipment.classList.toggle("hidden");
};
const toggleAdd = function () {
  addShipmentIcon.classList.toggle("hidden");
};
const toggleClose = function () {
  closeShipmentIcon.classList.toggle("hidden");
};

const activeLink = function () {
  listHover.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
};

listHover.forEach((item) => item.addEventListener("click", activeLink));

// menu toggle
const toggle = document.querySelector(".menu-box");
const navigation = document.querySelector(".admin-nav");
const main = document.querySelector(".main");

const collapseNav = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

const reduceNav = function () {
  navigation.classList.toggle("show");

  if (navigation.classList.contains("show")) {
    collapseNav();
  } else {
    collapseNav();
  }
};

toggle.addEventListener("click", collapseNav);

// dashboard toggle
dashBtn.addEventListener("click", function (e) {
  e.preventDefault();
  reduceNav();
  dashboard.classList.remove("hidden");
  users.classList.add("hidden");
  shipment.classList.add("hidden");
  settings.classList.add("hidden");
});
// nav toggle
userbtn.addEventListener("click", function (e) {
  e.preventDefault();
  reduceNav();
  dashboard.classList.add("hidden");
  users.classList.remove("hidden");
  shipment.classList.add("hidden");
  settings.classList.add("hidden");
});
// shipment toggle
shipmentBtn.addEventListener("click", function (e) {
  e.preventDefault();
  reduceNav();
  dashboard.classList.add("hidden");
  shipment.classList.remove("hidden");
  users.classList.add("hidden");
  settings.classList.add("hidden");
});
// add shipment
const toggleShip = function (e) {
  e.preventDefault();
  if (shipmentForm.classList.contains("hidden")) {
    toggleAdd();
    toggleTable();
    toggleForm();
    toggleClose();
  } else {
    toggleTable();
    toggleForm();
    toggleClose();
    toggleAdd();
  }
};

addShipmentForm.addEventListener("click", toggleShip);

editShipmentForm.forEach((item) => {
  item.addEventListener("click", toggleShip);
});

deleteShipmentForm.forEach((item) => {
  item.addEventListener("click", function () {
    popupDiv.classList.toggle("hidden");
  });
});

settingsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  reduceNav();
  dashboard.classList.add("hidden");
  shipment.classList.add("hidden");
  users.classList.add("hidden");
  settings.classList.remove("hidden");
  settingsForm.classList.add("hidden");
  settingsBox.classList.remove("hidden");
});

editBtn.addEventListener("click", function (e) {
  settingsForm.classList.remove("hidden");
  settingsBox.classList.add("hidden");
});

exitBtn.addEventListener("click", function (e) {
  settingsForm.classList.add("hidden");
  settingsBox.classList.remove("hidden");
});

noBtn.addEventListener("click", function (e) {
  popupDiv.classList.toggle("hidden");
});
