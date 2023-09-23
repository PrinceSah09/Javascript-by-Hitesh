resetValue();
let cnt = 1;
const input_btn = document.getElementById("addTaskButton");
const taskInp = document.getElementById("taskInput");
input_btn.addEventListener("click", function () {
  //extract the value from input field
  const input_Text = document.getElementById("taskInput");
  const data = input_Text.value.trim();
  if (data != "") {
    // render the data
    addTask(`${cnt++}. ${data}`);
    resetValue();
  }
});

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask(`${cnt++}. ${taskInp.value.trim()}`);
    resetValue();
  }
});

function addTask(param) {
  //create a new element
  const temp = document.createElement("h2");
  temp.innerText = param;
  document.querySelector(".data").appendChild(temp);
}

function resetValue() {
  const input_Text = (document.getElementById("taskInput").value = "");
}
