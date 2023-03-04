const notificationCard = document.querySelectorAll(".notification_card");
const seen = document.querySelectorAll(".seen");
const bell = document.querySelectorAll(".bell");
const date = document.querySelector(".date");
const dateYesterday = document.querySelector(".date-yesterday");
const markAsAll = document.querySelector("#mark_as_all");
const notifications = document.querySelector("#notifications");

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let ddminone = String(today.getDate()-1).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
today = dd + "/" + mm + "/" + yyyy;
yesterday = ddminone + "/" + mm + "/" + yyyy;
date.innerHTML = today;
dateYesterday.innerHTML = yesterday;
notificationCard.forEach((notiCard) => {
  markAsAll.addEventListener("click", () => {
    notiCard.style.backgroundColor = "#151515";

    notifications.innerHTML = "0";
    bell.forEach((bells) => {
      bells.classList.add("active");
    });
    seen.forEach((see) => {
      see.innerHTML = "seen <i class='bx bx-check-double' ></i>";
    });
  });
});
