const form = document.querySelector("#todo-form");
const input = document.querySelector("#task-input");
const ulList = document.querySelector("#todo-list");

form.addEventListener("submit", function (e){
   e.preventDefault();
    
    const textTask = input.value.trim();

    if (textTask !== "") {
        const newTestTask = document.createElement("li");
        newTestTask.textContent = textTask;
        ulList.appendChild(newTestTask);
        input.value = "";
    }
});

