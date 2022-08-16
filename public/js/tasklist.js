/*
GUI Programming II HW 5
Christa Davis
DASH-Meet tasklist.js
Javascript for tasklist sections of dashboard
Sources: https://www.freecodecamp.org/news/learn-crud-operations-in-javascript-by-building-todo-app/
*/

/* ADD YOUR TASK LIST JS HERE*/
var inputform = document.getElementById("inputForm"); //targetting inputform
var taskinput = document.getElementById("addtaskinputfield"); //targetting text area input field
var errorMsg = document.getElementById("errorMsg");
var todos = document.getElementById("todos");

    inputform.addEventListener("submit", (e)=>{
    e.preventDefault(); //prevents referesh on button click each time
    console.log("button clicked");
    inputformValidation(); //calling the form validation each time the submit button is pressed

});

var inputformValidation = () => {  //if else loop for empty task or entered info
    if(taskinput.value === ""){  //if input field is blank then show error
        errorMsg.innerHTML="Task cannot be empty" //Following error message will be displayed
        console.log("failure");
    }
    else{ //else add it to todo
        console.log("success");
        errorMsg.innerHTML = "" //if input is not blank show no error message
        acceptData();

    }
};

var data = {};  //empty object //this also pushes the info collected by acceptData function

var acceptData = () => {        //function to collect info entered in input field
    data["text"] = taskinput.value
    console.log(data); //displays the content taken.
    createTodo();
};

var createTodo = () => {
    todos.innerHTML +=
    `
    <div class="tasknum">
                <p>${data.text}</p>
                <span class="options">
                    <i onClick="editTask(this)" class="fa-regular fa-pen-to-square"></i>
                    <i onClick="deleteTask(this)" class="fa-regular fa-trash-can"></i>

                </span>
    </div>
    `;
    taskinput.value=''; //after adding the task reset the form by making the input field blank

};

var deleteTask = (e) => {
    e.parentElement.parentElement.remove(); //first parent element targets span and second targets the entier div that hold the task and it deletes it
};

var editTask = (e) => {
    taskinput.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};
