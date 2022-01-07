function createProject(){

    const newProject = document.getElementById('newProject');
    newProject.addEventListener('click', e=>{
        console.log("I was clicked");
    });

    function createNewProject(name){
        this.name = name;
        console.log(name);

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
