
function navigate(tab) {
  const content = {
    dashboard: '<h1>Dashboard</h1><p>Track everything in one place.</p>',
    contacts: '<h1>Contacts</h1><p>[Manage your leads and relationships]</p>',
    calendar: `
      <h1>Calendar</h1>
      <label for="date">Select Date:</label>
      <input type="date" id="date" />
      <br/><br/>
      <textarea id="entry" placeholder="Enter tasks or class blocks..."></textarea>
      <br/>
      <button onclick="saveCalendar()">Save Entry</button>
    `,
    tasks: `
      <h1>Tasks</h1>
      <input type="text" id="taskInput" placeholder="Enter a new task" />
      <button onclick="addTask()">Add Task</button>
      <ul id="taskList"></ul>
    `,
    newsletter: `
      <h1>College Startup Ticker</h1>
      <marquee behavior="scroll" direction="left">
        Stanford: Notable VC round raised | NYU: AI note-taker launched | UCLA: DTC brand hits $1M ARR
      </marquee>
    `,
  };
  document.getElementById('mainContent').innerHTML = content[tab];
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const task = taskInput.value;
  if (task.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function saveCalendar() {
  const date = document.getElementById("date").value;
  const entry = document.getElementById("entry").value;
  alert("Saved: " + date + " - " + entry);
}
