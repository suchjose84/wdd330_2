    export default class TodoController {
        constructor(inputValue){
            this.value = inputValue;
        }

        // Create a new list item when clicking on the "Add" button
        newElement(value) {
            var li = document.createElement("li");
            var inputValue = document.getElementById('myInput').value;
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            if (inputValue === '') {
                alert("You must write something!");
            } else {
                document.getElementById("myUL").appendChild(li);
            }
            document.getElementById("myInput").value = "";

            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);

            this.hideList();
            this.remainingTask();

        }

        // Create a "close" button and append it to each list item
        createCloseButton() {
            var myNodelist = document.getElementsByTagName("LI");
            var i;
            for (i = 0; i < myNodelist.length; i++) {
                var span = document.createElement("SPAN");
                var txt = document.createTextNode("\u00D7");
                span.className = "close";
                span.appendChild(txt);
                myNodelist[i].appendChild(span);
            }

        }
        // Add a "checked" symbol when clicking on a list item
        addCheckedSymbol() {
            var list = document.querySelector('ul');
            list.addEventListener('click', function (ev) {
                if (ev.target.tagName === 'LI') {
                    ev.target.classList.toggle('checked');
                }
            }, false);
            
        }
        // Click on a close button to hide the current list item
        hideList() {
            var close = document.getElementsByClassName("close");
            var i;
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
                

            }

        }

        remainingTask() {
            const list = [...document.getElementsByTagName('li')];
            const div = document.getElementById('countTasks');
            const filteredList = list.filter((data) => {
                return data.className === 'checked' || data.style.display === "none";

            });
            div.textContent = `Remaining tasks: ${list.length - filteredList.length}`;

            
        }

        createString() {
            
        }

    }