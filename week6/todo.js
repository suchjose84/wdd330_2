    export default class TodoController {

        // Create a new list item when clicking on the "Add" button
        newElement() {
            var li = document.createElement("li");
            var inputValue = document.getElementById("myInput").value;
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

            var close = document.getElementsByClassName("close");
            var i;

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
        addCheckedSymbol() {
            // Add a "checked" symbol when clicking on a list item
            var list = document.querySelector('ul');
            list.addEventListener('click', function (ev) {
                if (ev.target.tagName === 'LI') {
                    ev.target.classList.toggle('checked');
                }
            }, false);
            
        }

        hideList() {
            // Click on a close button to hide the current list item
            var close = document.getElementsByClassName("close");
            var i;
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    console.log('bukayo');
                    
                    div.style.display = "none";
                }
                

            }

        }
        countTask() {
            var myNodelist = document.getElementsByTagName("LI");
            var div = document.getElementById('countTasks');
            var i;
            for (i = 0; i < myNodelist.length; i++) {

            }
            div.textContent = `${i} tasks`;

            return;

        }
        countTask2() {
            var myNodelist = [...document.getElementsByTagName("LI")];
            var div = document.getElementById('countTasks');

            var filteredNodelist = myNodelist.filter((node) => {
                if (node.classList != "checked") {

                }
            });
            console.log(filteredNodelist.length);


            //div.textContent = `${i} tasks`;

            return;

        }

        savetask() {
            let myobj = this.newElement();
            localStorage.setItem('taskObj', myobj);
            console.log('booyayaya');

        }
        recount() {
            getClose.forEach(function (close) {
                close.addEventListener('click', function (e) {
                    console.log(e.currentTarget);

                })

            });
        }

        countTask300() {
            var myNodelist = document.getElementsByTagName("LI");
            var lists = [...myNodelist];
            var div = document.getElementById('countTasks');
            var i = 0;
            lists.filter((list) => {
                if (list.classList == 'checked' || list.display == 'none') {
                    i = i - 1;
                } else {
                    i++;
                }

            });
            div.textContent = `${i} tasks`;
            return;
        }

        remainingTask() {
            const list = [...document.getElementsByTagName('li')];
            const div = document.getElementById('countTasks');
            const filteredList = list.filter((data) => {
                return data.className === 'checked' || data.style.display === "none";

            });
            
            console.log(list.length);
            console.log(filteredList.length);
            console.log(list);


            div.textContent = `${list.length - filteredList.length} tasks`;

            
        }

    }