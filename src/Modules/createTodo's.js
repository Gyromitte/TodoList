function createNewTask(){
    const projectWindow = document.getElementById('projectWindow');

    const Task = document.createElement('div');
    Task.classList.add('task');
    Task.innerText = "Lorem impsum quiado";
    projectWindow.appendChild(Task);
}
export{createNewTask};