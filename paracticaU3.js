// Obtener elementos del DOM
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Cuando la página se carga, se obtienen las tareas guardadas en el localStorage
document.addEventListener("DOMContentLoaded", () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Mostrar todas las tareas almacenadas
    todos.forEach(todoItem => {
        appendElementTodoList(todoItem.text, todoItem.completed);
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
const appendElementTodoList = (todoItemText, isCompleted = false) => {
    const element = document.createElement("li");
    const text = document.createElement("span");
    const deleteButton = document.createElement("button");
    const completeButton = document.createElement("button");

    // Asignar texto a los botones y al span
    deleteButton.textContent = "Eliminar";
    completeButton.textContent = isCompleted ? "Descompletar" : "Completar";
    text.textContent = todoItemText;

    // Aplicar la clase "completed" si la tarea está completada
    if (isCompleted) {
        element.classList.add("completed");
    }

    // Agregar los elementos al 'li'
    element.appendChild(text);
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

    // Crear el elemento de la lista con el texto ingresado
    appendElementTodoList(todoItemText);

    // Guardar en el localStorage
    saveTodos();
};

// Función para guardar todas las tareas en el localStorage
const saveTodos = () => {
    const todos = [];
    document.querySelectorAll("#todo-list li").forEach(item => {
        todos.push({
            text: item.querySelector("span").textContent,
            completed: item.classList.contains("completed")
        });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
};

// Asignar el evento click al botón de agregar
addBtn.addEventListener("click", addTodo);
