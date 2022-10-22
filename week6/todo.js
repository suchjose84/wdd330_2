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
            this.countTask();
            this.countTask2();

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
                    div.style.display = "none";
                }

            }

        }
        countTask() {
            var myNodelist = document.getElementsByTagName("LI");
            var div = document.getElementById('countTasks');
            var i;
            for (i = 0; i < myNodelist.length; i++) {}
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

    }