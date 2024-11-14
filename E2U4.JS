// Obtener elementos del DOM
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Reloj analógico en la parte superior
document.addEventListener("DOMContentLoaded", () => {
    createClock();
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Mostrar todas las tareas almacenadas
    todos.forEach(todoItem => {
        appendElementTodoList(todoItem.text, todoItem.completed, todoItem.date);
    });
});

// Función para validar la entrada del input
const validateInput = (todoItemText) => {
    if (todoItemText.trim() === "") {
        alert("No puedes registrar un todo vacío");
        return false;
    }
    return true;
};

// Función para crear el elemento y agregarlo a la lista
const appendElementTodoList = (todoItemText, isCompleted = false, date = new Date().toLocaleString()) => {
    const element = document.createElement("li");
    const text = document.createElement("span");
    const dateSpan = document.createElement("span");
    const deleteButton = document.createElement("button");
    const completeButton = document.createElement("button");

    // Asignar texto a los botones y al span
    deleteButton.textContent = "Eliminar";
    completeButton.textContent = isCompleted ? "Descompletar" : "Completar";
    text.textContent = todoItemText;
    dateSpan.textContent = ` (${date})`;
    dateSpan.style.fontSize = '12px'; // Pequeño tamaño para la fecha

    // Aplicar la clase "completed" si la tarea está completada
    if (isCompleted) {
        element.classList.add("completed");
    }

    // Agregar los elementos al 'li'
    element.appendChild(text);
    element.appendChild(dateSpan); // Adjuntar la fecha al lado del nombre
    element.appendChild(completeButton);
    element.appendChild(deleteButton);

    // Funcionalidad de eliminar tarea
    deleteButton.addEventListener("click", () => {
        element.remove();
        saveTodos();
    });

    // Funcionalidad de completar/descompletar tarea
    completeButton.addEventListener("click", () => {
        element.classList.toggle("completed");
        completeButton.textContent = element.classList.contains("completed") ? "Descompletar" : "Completar";
        saveTodos();
    });

    // Activar edición solo con doble clic en el nombre (no en la fecha)
    text.addEventListener("dblclick", () => {
        const inputItem = document.createElement("input");
        inputItem.type = "text";
        inputItem.value = text.textContent;

        element.replaceChild(inputItem, text);

        inputItem.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                text.textContent = inputItem.value;
                element.replaceChild(text, inputItem);
                saveTodos();
            }
        });
    });

    // Agregar la tarea a la lista
    todoList.appendChild(element);
    input.value = ""; // Limpiar el input

    // Guardar las tareas en el localStorage
    saveTodos();
};

// Función para agregar una nueva tarea
const addTodo = () => {
    const todoItemText = input.value;
    if (!validateInput(todoItemText)) return;

    // Crear el elemento de la lista con el texto ingresado y la fecha actual
    appendElementTodoList(todoItemText);

    // Guardar en el localStorage
    saveTodos();
};

// Función para guardar todas las tareas en el localStorage
const saveTodos = () => {
    const todos = [];
    document.querySelectorAll("#todo-list li").forEach(item => {
        todos.push({
            text: item.querySelector("span:first-child").textContent,
            completed: item.classList.contains("completed"),
            date: item.querySelector("span:last-child").textContent.replace(/[()]/g, '') // Fecha sin paréntesis
        });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
};

// Asignar el evento click al botón de agregar
addBtn.addEventListener("click", addTodo);

// Crear reloj analógico
function createClock() {
    const clockContainer = document.createElement("div");
    clockContainer.id = "clock";
    clockContainer.style.width = "100px";
    clockContainer.style.height = "100px";
    clockContainer.style.border = "5px solid black";
    clockContainer.style.borderRadius = "50%";
    clockContainer.style.position = "relative";
    clockContainer.style.margin = "0 auto";
    document.body.insertBefore(clockContainer, document.body.firstChild);

    // Agregar manecillas
    const hourHand = document.createElement("div");
    const minuteHand = document.createElement("div");
    const secondHand = document.createElement("div");

    [hourHand, minuteHand, secondHand].forEach((hand) => {
        hand.style.position = "absolute";
        hand.style.bottom = "50%";
        hand.style.left = "50%";
        hand.style.transformOrigin = "bottom center";
        clockContainer.appendChild(hand);
    });

    hourHand.style.width = "4px";
    hourHand.style.height = "25px";
    hourHand.style.backgroundColor = "black";

    minuteHand.style.width = "3px";
    minuteHand.style.height = "35px";
    minuteHand.style.backgroundColor = "gray";

    secondHand.style.width = "2px";
    secondHand.style.height = "45px";
    secondHand.style.backgroundColor = "red";

    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondDegrees = (seconds / 60) * 360;
        const minuteDegrees = (minutes / 60) * 360;
        const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Inicializar el reloj
}
