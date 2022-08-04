/*
GUI Programming II HW 5
Christa Davis
DASH-Meet tasks.js
Javascript for tasks sections of dashboard
Sources:
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
https://codepen.io/franklynroth/pen/ZYeaBd
*/

//Create New Task -> Array of buttons, list for incomplete and complete
var taskInput=document.getElementById("new-task");
var addButton=document.getElementsByTagName("button")[0];
var incompleteTaskHolder=document.getElementById("incomplete-tasks");
var completedTasksHolder=document.getElementById("completed-tasks");

var createNewTaskElement = function(taskString){
		var listItem=document.createElement("li");
		var checkBox=document.createElement("input");
		var label=document.createElement("label");
		var editInput=document.createElement("input");
		var editButton=document.createElement("button");
		var deleteButton=document.createElement("button");

		label.innerText=taskString; //add text to label
		//ADD TASK NOTES HERE
		checkBox.type="checkbox";
		editInput.type="text";
		editButton.innerText="Edit";
		editButton.className="edit";
		deleteButton.innerText="Delete";
		deleteButton.className="delete";

		listItem.appendChild(checkBox);
		listItem.appendChild(label);
		listItem.appendChild(editInput);
		listItem.appendChild(editButton);
		listItem.appendChild(deleteButton);
		return listItem;
}

var addTask=function(){
		var listItem=createNewTaskElement(taskInput.value);
		incompleteTaskHolder.appendChild(listItem);
		bindTaskEvents(listItem, taskCompleted);
		taskInput.value="";
}

var editTask=function(){
		var listItem=this.parentNode;

		var editInput=listItem.querySelector('input[type=text]');
		var label=listItem.querySelector("label");
		var containsClass=listItem.classList.contains("editMode");

		if(containsClass)
				label.innerText=editInput.value;
		else
				editInput.value=label.innerText;
		listItem.classList.toggle("editMode");
}

var deleteTask=function(){
		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		ul.removeChild(listItem);
}

var taskCompleted=function(){
		var listItem=this.parentNode;
		completedTasksHolder.appendChild(listItem);
		bindTaskEvents(listItem, taskIncomplete);
}


var taskIncomplete=function(){
		var listItem=this.parentNode;
		incompleteTaskHolder.appendChild(listItem);
		bindTaskEvents(listItem,taskCompleted);
}

addButton.onclick=addTask;
addButton.addEventListener("click",addTask);

var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
		var checkBox=taskListItem.querySelector("input[type=checkbox]");
		var editButton=taskListItem.querySelector("button.edit");
		var deleteButton=taskListItem.querySelector("button.delete");
		editButton.onclick=editTask;
		deleteButton.onclick=deleteTask;
		checkBox.onchange=checkBoxEventHandler;
}
for (var i=0; i<incompleteTaskHolder.children.length;i++){
		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}

for (var i=0; i<completedTasksHolder.children.length;i++){
		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}
