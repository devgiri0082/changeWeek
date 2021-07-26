let date = new Date();

date.setDate(date.getDate() - date.getDay());
let dates = document.querySelector(".dates");
let month = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sept",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};
getDate("add");

function getDate(action) {
  dates.innerText = "";
  let count = 7;
  let leftDot = document.createElement("div");
  leftDot.classList.add("left");
  leftDot.innerText = "●";
  dates.append(leftDot);
  leftDot.addEventListener("click", () => getDate("subtract"));
  if (action === "subtract") date.setDate(date.getDate() - 14);
  for (let i = 0; i < count; i++) {
    let todayDate = new Date();
    let currentDate = document.createElement("div");
    currentDate.classList.add("date");
    currentDate.innerText = `${month[date.getMonth()]} ${
      Number(date.getDate()) < 10 ? "0" : ""
    }${date.getDate()}`;
    let sameDate =
      `${todayDate.getFullYear()} ${todayDate.getMonth()} ${todayDate.getDate()}` ===
      `${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`;
    currentDate.style.display = "flex";
    if (sameDate) currentDate.style.fontWeight = "Bold";
    dates.append(currentDate);
    date.setDate(date.getDate() + 1);
  }
  let rightDot = document.createElement("div");
  rightDot.classList.add("right");
  rightDot.innerText = "●";
  dates.append(rightDot);
  rightDot.addEventListener("click", () => getDate("add"));
}
