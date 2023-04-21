const container = document.querySelector('.js-card-container');

// делегируем обработчик событий на весь контейнер, где у нас создаются card
container.addEventListener('click', async (event) => {
  // проверяем, на каком именно элементе сработал click через массив classList, который содержит классы
  if (event.target.classList.contains('js-add-btn')) {
    const btn = event.target;

    const { id } = btn.dataset;

    // сделать запрос на добавление в БД
    const response = await fetch(`/api/card/${id}`, {
      method: 'POST',
    });

    const json = await response.json(); //  чтобы достать тело ответа

    // смотрим, что там вернулось
    console.log(json);
    if (json.success) {
      btn.textContent = 'добавлено';
      btn.style.background = 'green';
    } else console.log(json.message);

    // обновить страницу без перезагрузки
  }
});
