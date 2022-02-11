function createProject(){

    const newProject = document.getElementById('newProject');
    newProject.addEventListener('click', e=>{
        console.log("I was clicked");
    });

    const sideBar = document.getElementById('sideBar');

    let listOfProjects = [];
    function createNewProject(name){
        this.name = name;
        console.log(name);

        listOfProjects.push(name);
        console.log(listOfProjects);

        let projectElement = document.createElement('button');
        projectElement.classList.add('projectListElement');
        projectElement.innerText = name;
        sideBar.appendChild(projectElement);
        

    }

    const inputNameOfProject = document.getElementById('name');
    const modalNewProject = document.getElementById('modalNewProject');

    const submitButtonProject = document.getElementById('submit-button');
    submitButtonProject.addEventListener('click', e=>{
        event.preventDefault();
        let name = document.getElementById('name').value;
        new createNewProject(name);

        modalNewProject.style.display = "none";
        inputNameOfProject.value = "";
    });

}
export {createProject};
