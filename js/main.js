const weeks = [{
    label: "Week1 Notes",
    url: "week1/index.html"
},
{
    label: "Week2 Notes",
    url: "week2/index.html"
},
{
    label: "Week3 Notes",
    url: "week3/index.html"
},
{
    label: "Week4 Notes",
    url: "week4/index.html"
},
{
    label: "Week5 Notes",
    url: "week5/index.html"
},
{
    label: "Week6 Notes",
    url: "week6/index.html"
},
{
    label: "Week7 Notes",
    url: "week7/index.html"
},
{
    label: "Week8 Notes",
    url: "week8/index.html"
},
{
    label: "Week9 Notes",
    url: "week9/index.html"
}
,
{
    label: "Week10 Notes",
    url: "week10/index.html"
},
{
    label: "Week11 Notes",
    url: "week11/index.html"
},
{
    label: "Week12 Notes",
    url: "week12/index.html"
},
{
    label: "Week13 Notes",
    url: "week13/index.html"
},
{
    label: "Block 2 Challenge",
    url: "week14/index.html"
}
]

for (let i = 0; i < weeks.length; i++) {

let li = document.createElement('li');
let a = document.createElement('a');
let textNode = document.createTextNode(`Week ${i+1}`);
a.setAttribute('href', weeks[i].url);
a.appendChild(textNode);

li.appendChild(a);



document.querySelector('.weeks').appendChild(li);




}