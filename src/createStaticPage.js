function createStaticPage(){
    const content = document.getElementById('content');

    const header = document.createElement('header');
    header.id = "header";
    header.innerText = "Todo List"
    content.appendChild(header);

    const container = document.createElement('container');
    content.appendChild(container);

    const sideBar = document.createElement('sideBar');
    sideBar.id = "sideBar";
    sideBar.innerText = "Projects";
    container.appendChild(sideBar);

    const newProject = document.createElement('button');
    newProject.classList = "sideBarElement";
    newProject.id = "newProject";
    newProject.innerText = "Add new Project +";
    sideBar.appendChild(newProject);

    const projectContainer = document.createElement('project-container');
    container.appendChild(projectContainer);

    const projectWindow = document.createElement('project-window');
    projectWindow.id = "projectWindow";
    projectContainer.appendChild(projectWindow);

    const addNewTask = document.createElement('button');
    addNewTask.id = "addNewTask";
    addNewTask.innerText = "Add new task +"
    projectWindow.appendChild(addNewTask);

}
export {createStaticPage};