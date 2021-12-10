function createStaticPage(){
    const content = document.getElementById('content');

    //Modal background
    const modalNewProject = document.createElement('modal-newProject');
    modalNewProject.classList = "modal";
    modalNewProject.style.display = "none";
    content.appendChild(modalNewProject);

    //Modal container
    const newProjectModalContent = document.createElement('div');
    newProjectModalContent.classList = "modal-content";
    modalNewProject.appendChild(newProjectModalContent);

    //Modal content
    const newProjectForm = document.createElement('form');
    newProjectModalContent.appendChild(newProjectForm);

    const enterNameOfProject = document.createElement('label');
    enterNameOfProject.for = "name";
    enterNameOfProject.innerText = "Name your project:";
    newProjectForm.appendChild(enterNameOfProject);

    const br = document.createElement('br');
    newProjectForm.appendChild(br);

    const inputNameOfProject = document.createElement('input');
    inputNameOfProject.id = "name";
    inputNameOfProject.type = "text";
    inputNameOfProject.required;
    inputNameOfProject.maxLength = "50";
    newProjectForm.appendChild(inputNameOfProject);


    newProjectForm.appendChild(inputNameOfProject);

    const submitButtonProject = document.createElement('button');
    submitButtonProject.id = "submit-button";
    submitButtonProject.type = "submit";
    submitButtonProject.value = "Submit";
    submitButtonProject.innerText = "Add project";
    newProjectForm.appendChild(submitButtonProject);

    const cancelButtonProject = document.createElement('button');
    cancelButtonProject.id = "cancel-button";
    cancelButtonProject.type = "button";
    cancelButtonProject.innerText = "Cancel";

    cancelButtonProject.addEventListener('click', e=>{
        modalNewProject.style.display = "none";
    });

    newProjectForm.appendChild(cancelButtonProject);

    //Header of the page
    const header = document.createElement('header');
    header.id = "header";
    header.innerText = "Todo List"
    content.appendChild(header);

    //Rest of the page below the header
    const container = document.createElement('container');
    container.id = "container";
    content.appendChild(container);

    //Side bar
    const sideBar = document.createElement('sideBar');
    sideBar.id = "sideBar";
    sideBar.innerText = "Projects";
    container.appendChild(sideBar);

    const newProject = document.createElement('button');
    newProject.classList = "sideBarElement";
    newProject.id = "newProject";
    newProject.innerText = "Add new Project +";

    newProject.addEventListener('click', e=>{
        modalNewProject.style.display = "block";
    });

    sideBar.appendChild(newProject);

    //Project window
    const projectContainer = document.createElement('project-container');
    container.appendChild(projectContainer);

    const projectWindow = document.createElement('project-window');
    projectWindow.id = "projectWindow";
    projectContainer.appendChild(projectWindow);

    const headerProjectWindow = document.createElement('div');
    headerProjectWindow.id = "headerProjectWindow";
    projectWindow.appendChild(headerProjectWindow);

    const addNewTask = document.createElement('button');
    addNewTask.id = "addNewTask";
    addNewTask.innerText = "Add new task +"
    headerProjectWindow.appendChild(addNewTask);

    const nameOfProject = document.createElement('button');
    nameOfProject.id = "nameOfProject";
    nameOfProject.innerText = "Loremp impsum";
    headerProjectWindow.appendChild(nameOfProject);

}
export {createStaticPage};