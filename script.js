// Energy Log
const energyForm = document.getElementById('energy-form');
const logList = document.getElementById('log-list');
let energyEntries = [];

energyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const energy = document.getElementById('energy').value;
    const notes = document.getElementById('notes').value;

    const entry = {
        energy: energy,
        notes: notes,
        time: new Date().toLocaleTimeString()
    };

    energyEntries.push(entry);
    displayEnergyEntries();

    energyForm.reset();
});

function displayEnergyEntries() {
    logList.innerHTML = '';
    energyEntries.forEach((entry, index) => {
        const li = document.createElement('li');
        li.textContent = `${entry.time} - Energy: ${entry.energy} - Notes: ${entry.notes}`;
        logList.appendChild(li);
    });
}

// Task List
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
let tasks = [];

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const taskTime = document.getElementById('task-time').value;

    const task = {
        name: taskName,
        time: taskTime
    };

    tasks.push(task);
    displayTasks();

    taskForm.reset();
});

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${task.time} - ${task.name}`;
        taskList.appendChild(li);
    });
}
