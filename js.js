function generateList(array) {
    // Створюємо елемент <ul>
    let ul = document.createElement('ul');

    // Перебираємо елементи в масиві
    array.forEach(item => {
        // Створюємо елемент <li>
        let li = document.createElement('li');

        // Перевіряємо, чи поточний елемент є масивом
        if (Array.isArray(item)) {
            // Якщо елемент - масив, рекурсивно викликаємо generateList для нього
            li.appendChild(generateList(item));
        } else {
            // Якщо елемент - число, додаємо його як текст в <li>
            li.textContent = item;
        }

        // Додаємо <li> до <ul>
        ul.appendChild(li);
    });

    // Повертаємо створений <ul>
    return ul;
}

// Приклад використання:
let array = [1, 2, 3, [1.1, 1.2, 1.3], 4, [4.4, 4.5]];
let listContainer = document.getElementById('list-container'); // Отримуємо контейнер, куди будемо додавати список
listContainer.appendChild(generateList(array)); // Додаємо список до контейнера
