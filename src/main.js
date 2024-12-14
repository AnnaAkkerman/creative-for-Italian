const images = [
  {
    src: "../creative-for-Italian/src/images/italy3.jpg",
    info: "Pulizie di primavera in stile italiano!",
    className: "info-style-1",
  },
  {
    src: "../creative-for-Italian/src/images/italy4-2х.jpg",
    info: "Vuoi rendere la pulizia facile come una brezza primaverile?",
    className: "info-style-2",
  },
  {
    src: "../creative-for-Italian/src/images/italy5-2х.jpg",
    info: "Partecipa al nostro giveaway e vinci un Dyson V15 a soli €2!",
    className: "info-style-3",
  },
  {
    src: "../creative-for-Italian/src/images/italy6-1.jpg",
    info: "Partecipare!",
    className: "info-style-4",
  },
  {
    src: "../creative-for-Italian/src/images/2-2x.webp",
    className: "info-style-5",
  },
];

let currentIndex = 0;
const imageElement = document.getElementById("current-image");
const infoContainer = document.getElementById("info-container");
const lastImageContainer = document.getElementById("last-image-container");

let intervalId;

function changeImage() {
  imageElement.style.opacity = 0;
  infoContainer.classList.remove("active");
  infoContainer.className = "";
  lastImageContainer.classList.add("hidden");

  setTimeout(() => {
    imageElement.src = images[currentIndex].src;

    infoContainer.textContent = images[currentIndex].info;

    infoContainer.classList.add(images[currentIndex].className);
    infoContainer.classList.add("active");

    imageElement.style.opacity = 1;

    if (currentIndex === images.length - 2) {
      infoContainer.classList.add("second-to-last");
      infoContainer.classList.add("wave-effect");

      clearInterval(intervalId);
      setupLastImageHandler();
    } else if (currentIndex === images.length - 1) {
      infoContainer.className = "";
    } else {
      currentIndex++;
    }
  }, 500);
}

function setupLastImageHandler() {
  infoContainer.addEventListener("click", showLastImage, { once: true }); // Обработчик срабатывает один раз
}

function showLastImage() {
  currentIndex++;

  imageElement.style.opacity = 0;
  infoContainer.classList.remove("active");
  lastImageContainer.classList.remove("hidden");

  const coin = lastImageContainer.querySelector(".coin");
  const arrow = lastImageContainer.querySelector(".arrow");
  const gift = lastImageContainer.querySelector(".gift");

  coin.classList.remove("hidden");
  arrow.classList.remove("hidden");
  gift.classList.remove("hidden");

  setTimeout(() => {
    imageElement.src = images[currentIndex].src;
    infoContainer.textContent = images[currentIndex].info;

    infoContainer.classList.add(images[currentIndex].className);
    infoContainer.classList.add("active");

    imageElement.style.opacity = 1;
  }, 500);
}

intervalId = setInterval(changeImage, 3000);

changeImage();
