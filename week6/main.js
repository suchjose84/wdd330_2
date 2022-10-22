import TodoController from './todo.js';

const getController = new TodoController();
const onClickSpan = document.querySelector('.addBtn');
const input = document.getElementById('myInput');
const btns = document.querySelectorAll('.close');



//Event Listeners
onClickSpan.addEventListener('click', () => {
    getController.newElement();
});
input.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        getController.newElement();

    }
});

getController.createCloseButton();
getController.addCheckedSymbol();
getController.hideList();
getController.countTask2();
