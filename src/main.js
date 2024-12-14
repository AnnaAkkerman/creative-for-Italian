const coinElement = document.querySelector(".coin");
const ps5Element = document.querySelector(".ps5");
const btnElement = document.querySelector(".btn");
const descriptionElement = document.querySelector(".description");
const descriptionEndElement = document.querySelector(".descriptionEnd");

btnElement.addEventListener("click", () => {
  coinElement.style.opacity = "0";
  descriptionEndElement.style.opacity = "0";
  descriptionElement.style.opacity = "0";
  ps5Element.style.opacity = "1";
});

function createSnowflakes() {
  const numberOfSnowflakes = 150;
  for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 4 + "s";
    snowflake.style.animationDelay = Math.random() * 5 + "s";
    snowflake.style.opacity = Math.random() * 0.5 + 0.3;
    document.body.appendChild(snowflake);
  }
}

window.onload = createSnowflakes;
