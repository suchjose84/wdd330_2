import TodoController from './todo.js';

const getController = new TodoController();
const onClickSpan = document.querySelector('.addBtn');
const input = document.getElementById('myInput');
const list = document.querySelector('UL');

getController.addCheckedSymbol();
getController.createCloseButton();
getController.hideList();

//Event Listeners
onClickSpan.addEventListener('click', () => {
    getController.newElement();
});
input.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        getController.newElement();

    }
});

list.addEventListener('click', function (ev) {
    if (ev.target) {
        getController.remainingTask();
    }
    
}, false);




//getController.countTask300();
