const planets = document.querySelectorAll(".planet");
let leftLimit = 700;
let rightLimit = -100;
let cur = 0;
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");

const render = (value) => {
  if (value > -1) {
    document.querySelector(
      ".wrapper"
    ).style.transform = `translate(${-value}vw)`;
  } else if (value === -100) {
    document.querySelector(".wrapper").style.transform = `translate(${0}vw)`;
  } else {
    document.querySelector(
      ".wrapper"
    ).style.transform = `translate(${value}vw)`;
  }
};

rightBtn.addEventListener("click", () => {
  if (cur >= leftLimit) {
    return;
  } else {
    cur += 100;
    render(cur);
  }
});

leftBtn.addEventListener("click", () => {
  if (cur <= rightLimit && cur !== 0) {
    return;
  } else {
    cur -= 100;
    render(cur);
  }
});

const aClick = document.querySelectorAll("[data-curValue]");
aClick.forEach((a) =>
  a.addEventListener("click", (e) => {
    e.stopPropagation();
    const curvalue = e.currentTarget.dataset.curvalue;
    cur = parseInt(curvalue);
    render(cur);
  })
);
