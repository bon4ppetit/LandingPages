let scoreListTask = 0;
let deletedTasks = [];

function openPanelAddTask() {
  let panelAddTask = document.querySelector('.wrapper-panel-add-task'),
  panelAddTaskClass = panelAddTask.classList;

  panelAddTaskClass.add('wrapper-panel-add-task-show');
}

function cancelAddTask() {
  let panelAddTask = document.querySelector('.wrapper-panel-add-task'),
  panelAddTaskClass = panelAddTask.classList;

  addTaskText.value = '';

  panelAddTaskClass.remove('wrapper-panel-add-task-show');
}

function addTask() {

  let text = addTaskText.value,
  wrapperTasks = document.querySelector('.wrapper-tasks');

  let listTaskEmpty = document.querySelector('.list-task-empty');
  listTaskEmpty.classList.add('list-task-empty-hide');
  ++scoreListTask;

  let newTask = document.createElement('div');
  
  newTask.innerText = text;
  newTask.classList.add('new-task');
  wrapperTasks.append(newTask);

  let imgOne = document.createElement('img');
  imgOne.src = './access/img/ico/x-24.svg';
  imgOne.classList.add('img-task');
  newTask.prepend(imgOne);

  let imgTwo = document.createElement('img');
  imgTwo.src = './access/img/ico/check-24.svg';
  imgTwo.classList.add('img-task');
  imgTwo.addEventListener('click', () => {
    replaceInTrash(newTask);
  })
  newTask.append(imgTwo);

  cancelAddTask();
}

function openPanelTrashTask() {
  let panelTrashTask = document.querySelector('.wrapper-panel-trash-task'),
  panelTrashTaskClass = panelTrashTask.classList;

  panelTrashTaskClass.add('wrapper-panel-add-task-show');
}

function closePanel() {
  let panelTrashTask = document.querySelector('.wrapper-panel-trash-task'),
  panelTrashTaskClass = panelTrashTask.classList

  panelTrashTaskClass.remove('wrapper-panel-add-task-show');
}

function replaceInTrash(task) {
  let trash = document.querySelector('.panel-trash-task');
  let newElemTrash = document.createElement('div');

  --scoreListTask;

  newElemTrash.classList.add('new-task');
  newElemTrash.innerText = task.innerText;
  trash.append(newElemTrash);

  showListTaskEmpty();
  
  task.remove();
}

function showListTaskEmpty() {
  if (scoreListTask == 0) {
    let listTaskEmpty = document.querySelector('.list-task-empty');
    listTaskEmpty.classList.remove('list-task-empty-hide');
  }
}