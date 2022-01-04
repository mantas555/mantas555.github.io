//todo logic
let add = document.getElementById("btn-add");
let list = document.getElementById("task-list");

add.addEventListener("click", function () {
  list.innerHTML = `${list.innerHTML} <li class="list-group-item disabled">${
    document.getElementById("taskName").value
  }</li>`;
});

// PWA logic
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")

    .then((reg) => console.log("service worker registered"))

    .catch((err) => console.log("service worker not registered", err));
}

// install event

self.addEventListener("install", (evt) => {
  console.log("service worker installed");
});

// activate event

self.addEventListener("activate", (evt) => {
  console.log("service worker activated");
});

// fetch event

self.addEventListener("fetch", (evt) => {
  console.log("fetch event", evt);
});