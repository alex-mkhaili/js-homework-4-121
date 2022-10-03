let todoUl = document.querySelector("#todo-ul");
let todoForm = document.querySelector("#todo-form");
let todoInput = document.querySelector("#todo-input");
let deleteAllLists = document.querySelector("#todo-clear-btn");

// სტილების დამატება ფოკუსის დროს
todoInput.addEventListener("focus", function(event) {
    event.target.style.border = "2px solid black";
    event.target.style.background = "rgb(232, 232, 232)";    
});



todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // li-ს შექმნა
    let inputValue = todoInput.value;
    let li = document.createElement('li');
    li.classList.add("list");
    li.innerText = inputValue;
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-sharp", "fa-solid", "fa-circle-xmark", "x-icon");
    li.appendChild(deleteIcon);
    
    // წაშლის ღილაკის ფუნქციონალი
    deleteIcon.addEventListener("click", function() {
        li.remove();
    });
    
    // ul-ში დამატება
    todoUl.appendChild(li);

    // input-ის გასუფთავება
    todoInput.value = " ";

    todoInput.focus();
});

deleteAllLists.addEventListener("click", function() {
    todoUl.innerHTML = " ";
});


// Burger bar function

let burgerBar = document.getElementById("burger-bar");

burgerBar.addEventListener("click", function() {
    burgerBar.classList.toggle("burger-bar-active");

})