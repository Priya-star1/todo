const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
    if (taskText === '') return;

      const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

          taskItem.innerHTML = `
              <span>${taskText}</span>
                  <button class="delete-btn">Delete</button>
                    `;

                    
                        taskItem.addEventListener('click', (e) => {
                            if (e.target.tagName !== 'BUTTON') {
                                  taskItem.querySelector('span').classList.toggle('complete');
                                      }
                                        });

                                            taskItem.querySelector('.delete-btn').addEventListener('click', () => {
                                                taskItem.remove();
                                                  });

                                                    taskList.appendChild(taskItem);
                                                      taskInput.value = '';
                                                      });