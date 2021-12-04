function createNewTask(){
    const projectWindow = document.getElementById('projectWindow');

    for (let i = 0; i <2; i++){
        const Task = document.createElement('div');
        Task.classList.add('task');
        Task.innerText = "Lorem impsum quiado";
        projectWindow.appendChild(Task);
    }

}
export{createNewTask};