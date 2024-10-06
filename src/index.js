document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  let taskList = document.getElementById('tasks');
  let taskDescription = document.getElementById('new-task-description');
  let taskPriority = document.getElementById('new-task-priority');
  let completedList = document.getElementById('completed-list');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    //create
    if (taskDescription.value === '' || taskDescription.value === null) {
      //create error message
      let error=document.createElement('p');
      document.getElementById('error').appendChild(error);
      error.innerHTML = 'Please enter a task';
      error.style.color = 'red';
    }



    let task = document.createElement('li');
    task.innerHTML = `${taskDescription.value}`;
    taskList.appendChild(task);
    //clear input field
    taskDescription.value = '';

    if (taskPriority.value === 'high') {
      task.style.color = 'red';
    }
    else if (taskPriority.value === 'medium') {
      task.style.color = 'orange';
    }
    else if (taskPriority.value === 'low') {
      task.style.color = 'green';
    }
    //create delete button
    let deleteButton = document.createElement('i');
    deleteButton.innerHTML = ' <i class="fa-solid fa-trash"></i>';
    task.appendChild(deleteButton);
    //add event listener to delete button
    deleteButton.addEventListener('click', function() {
      task.remove();
    });
     //create mark complete button
  let completeButton = document.createElement('i');
  let markIncompleteButton = document.createElement('i');
  markIncompleteButton.innerHTML = ' <i class="fa-solid fa-xmark"></i>';
  task.appendChild(markIncompleteButton);
  markIncompleteButton.style.display = 'none';
  completeButton.innerHTML = ' <i class="fa-solid fa-check"></i>';
  task.appendChild(completeButton);
  //add event listener to complete button
  completeButton.addEventListener('click', function() {
    task.style.textDecoration = 'line-through';
    completeButton.remove();
    markIncompleteButton.style.display = 'inline-block';
    let completedTasks = document.getElementById('completed-tasks');
    completedTasks.appendChild(task);
    completedTasks.style.display = 'block';
    task.style.color= 'purple'
    completedList.style.display = 'block';
    
    
  });
  //add event listener to mark incomplete button
  markIncompleteButton.addEventListener('click', function() {
    task.style.textDecoration = 'none';
    markIncompleteButton.style.display = 'none';
    task.appendChild(completeButton);
    taskList.appendChild(task);
    if (taskPriority.value === 'high') {
      task.style.color = 'red';
    }
    else if (taskPriority.value === 'medium') {
      task.style.color = 'orange';
    }
    else if (taskPriority.value === 'low') {
      task.style.color = 'green';
    }
  });
  });
  
});
  // //create edit button
    // let editButton = document.createElement('button');
    // editButton.innerHTML = 'Edit';
    // task.appendChild(editButton);
    // //add event listener to edit button
    // editButton.addEventListener('click', function() {
    //   let newDescription = prompt('Enter new description');
    //   task.innerHTML = newDescription;
    //   //sorting by priority
    //   if (taskPriority.value === 'high') {
    //     task.style.color = 'red';
    //   }
    //   else if (taskPriority.value === 'medium') {
    //     task.style.color = 'yellow';
    //   }
    //   else if (taskPriority.value === 'low') {
    //     task.style.color = 'green';
    //   }
    // });

