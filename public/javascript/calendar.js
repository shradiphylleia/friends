document.addEventListener('DOMContentLoaded', function () {
    const daysElement = document.getElementById('days');
    const monthYearElement = document.getElementById('month-year');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const selectedDateElement = document.getElementById('selected-date');
    const todoItemsElement = document.getElementById('todo-items');
    const newVaccinationInput = document.getElementById('Vaccination');
    const addVaccinationButton = document.getElementById('add-vaccination');

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    let selectedDate = null;
    const todos = {};

    function renderCalendar(month, year) {
        daysElement.innerHTML = '';
        monthYearElement.innerText = `${months[month]} ${year}`;

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const numberOfDays = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement('div');
            daysElement.appendChild(emptyDiv);
        }

        for (let day = 1; day <= numberOfDays; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = day;
            dayDiv.addEventListener('click', function () {
                const activeDiv = daysElement.querySelector('.active');
                if (activeDiv) {
                    activeDiv.classList.remove('active');
                }
                dayDiv.classList.add('active');
                selectedDate = new Date(year, month, day);
                updateSelectedDate();
                renderTodos();
            });
            daysElement.appendChild(dayDiv);
        }
    }

    function updateSelectedDate() {
        if (selectedDate) {
            selectedDateElement.textContent = selectedDate.toDateString();
        } else {
            selectedDateElement.textContent = '';
        }
    }

    function renderTodos() {
        todoItemsElement.innerHTML = '';
        const dateKey = selectedDate.toISOString().split('T')[0];
        const dateTodos = todos[dateKey] || [];
        dateTodos.forEach(todo => {
            const todoItem = document.createElement('li');
            todoItem.textContent = todo;
            todoItemsElement.appendChild(todoItem);
        });
    }

    function addTodo() {
        if (!selectedDate) return;
        const newTodo = newVaccinationInput.value.trim();
        if (newTodo === '') return;
        const dateKey = selectedDate.toISOString().split('T')[0];
        if (!todos[dateKey]) {
            todos[dateKey] = [];
        }
        todos[dateKey].push(newTodo);
        newVaccinationInput.value = '';
        renderTodos();
    }

    prevButton.addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextButton.addEventListener('click', function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    addVaccinationButton.addEventListener('click', addTodo);

    renderCalendar(currentMonth, currentYear);
});
