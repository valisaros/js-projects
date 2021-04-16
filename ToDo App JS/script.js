const inputEl = document.getElementById("input__div");

inputEl.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      getValue();
    }
});

function getValue() {
    // Get the task input value
    const taskEl = document.getElementById("task");
    const taskValue = taskEl.value;

   

    if(taskValue) {
        // Add the task to the ul
        const olEl = document.getElementById("list");
        const li = document.createElement("li");

        li.innerText = taskValue;

        olEl.appendChild(li);

       

        li.addEventListener("contextmenu", (e) => {
            e.preventDefault();
    
            li.remove();
        })
    
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        })

         // Clear the input value
         taskEl.value = '';
    }

}

