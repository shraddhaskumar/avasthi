document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    
    // Pre-entered tasks
    let tasks = [
        { id: 1, title: 'Knit a Scarf', desc: 'Use merino wool to knit a 60-inch ribbed scarf.' },
        { id: 2, title: 'Finish Baby Blanket', desc: 'Complete a 36x36 inch garter stitch baby blanket.' },
        { id: 3, title: 'Start Sweater Project', desc: 'Begin a medium-size cable knit sweater.' },
        { id: 4, title: 'Make Knitted Coasters', desc: 'Knit a set of 6 seed stitch cotton coasters.' },
        { id: 5, title: 'Complete Hat for Charity', desc: 'Finish a simple ribbed hat for charity donation.' }
    ];

    // Load pre-entered tasks
    tasks.forEach(task => addTaskToList(task));

    function addTaskToList(task) {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        li.innerHTML = `
            <span><strong>${task.title}</strong>: ${task.desc}</span>
            <div class="actions">
                <button class="InProgress">In Progress</button>
                <button class="Complete">Complete</button>
            </div>
        `;
        taskList.appendChild(li);

        li.querySelector('.InProgress').addEventListener('click', () => inProgressTask(task.id));
        li.querySelector('.Complete').addEventListener('click', () => completeTask(task.id));
    }

    function inProgressTask(id) {
        const li = taskList.querySelector(`[data-id="${id}"]`);
        li.style.backgroundColor = '#ffc107'; // Yellow background for in progress
    }

    function completeTask(id) {
        tasks = tasks.filter(t => t.id !== id);
        const li = taskList.querySelector(`[data-id="${id}"]`);
        taskList.removeChild(li);
        checkAllTasksCompleted(); // Add this line to check if all tasks are completed
    }
    function checkAllTasksCompleted() {
        if (tasks.length === 0) {
            alert('Congratulations! You have completed all tasks.');
        }
    }
});
