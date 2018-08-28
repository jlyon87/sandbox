window.todo = (function todo(todo) {

	var inputText = document.getElementById("textInput");
	var saveBtn = document.getElementById("todoSave");
	var todoList = document.getElementById("todoList");

	var deleteTodo = function(event) {
		todoList.removeChild(event.target.parent);
	};

	var createListItem = function(text) {
		var deleteButton = document.createElement("button");
		deleteButton.textContent = "X";
		deleteButton.addEventListener("click", deleteTodo);
		var li = document.createElement("li");
		li.textContent = text;
		li.appendChild(deleteButton);
		todoList.appendChild(li);
	};

	var clickSave = function(event) {
		createListItem(inputText.value);
	};

	var init = function() {
		saveBtn.addEventListener("click", clickSave);
	};
	init();

	return todo;
})(window.todo || {});