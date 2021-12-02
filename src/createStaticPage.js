function createStaticPage(){
    const content = document.getElementById('content');

    const header = document.createElement('header');
    header.id = "header";
    header.innerText = "Todo List"
    content.appendChild(header);
}
export {createStaticPage};