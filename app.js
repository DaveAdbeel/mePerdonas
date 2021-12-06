const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const HIDDEN1 = document.getElementById("hidden1");
const HIDDEN2 = document.getElementById("hidden2");
const SHOW = document.getElementById("show");

btnSi.addEventListener("click", () => {
    HIDDEN1.classList.add("hidden");
    HIDDEN2.classList.add("hidden");
    SHOW.style.zIndex = "2";
});

btnNo.addEventListener("mouseover", () => {
  const posX = parseInt(Math.floor(Math.random() * 75));
  const posY = parseInt(Math.floor(Math.random() * 75));

  btnNo.style.left = `${posX}%`;
  btnNo.style.top = `${posY}%`;
});


