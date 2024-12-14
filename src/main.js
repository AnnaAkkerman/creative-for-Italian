// Функция смены изображения и текста
const images = [
  {
    src: "./images/italy3.jpg",
    info: "Pulizie di primavera in stile italiano!",
    className: "info-style-1",
  },
  {
    src: "./images/italy4-2х.jpg",
    info: "Vuoi rendere la pulizia facile come una brezza primaverile?",
    className: "info-style-2",
  },
  {
    src: "./images/italy5-2х.jpg",
    info: "Partecipa al nostro giveaway e vinci un Dyson V15 a soli €2!",
    className: "info-style-3",
  },
  {
    src: "./images/italy6-1.jpg",
    info: "Partecipare!",
    className: "info-style-4",
  },
  {
    src: "./images/2-2x.webp",
    className: "info-style-5",
  },
];

let currentIndex = 0;
const imageElement = document.getElementById("current-image");
const infoContainer = document.getElementById("info-container");
const lastImageContainer = document.getElementById("last-image-container");

let intervalId;

function changeImage() {
  imageElement.style.opacity = 0; // Плавное исчезновение изображения
  infoContainer.classList.remove("active"); // Убираем активное состояние
  infoContainer.className = ""; // Удаляем старые классы
  lastImageContainer.classList.add("hidden");

  setTimeout(() => {
    // Обновление изображения
    imageElement.src = images[currentIndex].src;

    // Обновление текста
    infoContainer.textContent = images[currentIndex].info;

    // Применение уникального класса для контейнера
    infoContainer.classList.add(images[currentIndex].className);
    infoContainer.classList.add("active"); // Добавляем активное состояние

    // Плавное появление изображения
    imageElement.style.opacity = 1;

    // Плавная анимация для предпоследнего изображения
    if (currentIndex === images.length - 2) {
      infoContainer.classList.add("second-to-last");
      infoContainer.classList.add("wave-effect");

      clearInterval(intervalId); // Остановить интервал на предпоследней картинке
      setupLastImageHandler(); // Установить обработчик для последней картинки
    } else if (currentIndex === images.length - 1) {
      // Добавляем стили для последней картинки
      infoContainer.className = "";
      showLastImage(); // Показать последний контейнер при достижении последнего изображения
    } else {
      currentIndex++;
    }
  }, 500); // Задержка для синхронизации перехода
}

// Обработчик клика для отображения последней картинки
function setupLastImageHandler() {
  infoContainer.addEventListener("click", showLastImage, { once: true }); // Обработчик срабатывает один раз
}

function showLastImage() {
  currentIndex++; // Переключаем на последнюю картинку

  // Обновляем изображение и текст
  imageElement.style.opacity = 0;
  infoContainer.classList.remove("active");
  lastImageContainer.classList.remove("hidden"); // Убираем класс hidden

  // Убираем скрытость для внутренних элементов
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
