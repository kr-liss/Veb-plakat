// Функция для проверки видимости элемента
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Проверяем, находится ли элемент в пределах видимости
  const isVisible = rect.top < windowHeight && rect.bottom > 0;

  return isVisible;
}

// Функция для добавления/удаления класса при скролле
function handleScroll() {
  const elements = document.querySelectorAll(
    ".roboto_orlando, .roboto_lamp, .loonie_robot, .watcher_roboto"
  ); // Выбираем все элементы
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      // Если элемент видим и не имеет класс 'visible', добавляем его
      if (!element.classList.contains("visible")) {
        element.classList.add("visible");
      }
    } else {
      // Если элемент не видим, удаляем класс 'visible'
      if (element.classList.contains("visible")) {
        element.classList.remove("visible");
      }
    }
  });
}

// Добавляем обработчик события скролла
window.addEventListener("scroll", handleScroll);
