const weeks = [{
    label: "Week1 Notes",
    url: "week1/index.html"
},
{
    label: "Week2 Notes",
    url: "week2/index.html"
}
{
    label: "Week3 Notes",
    url: "week3/index.html"
}
{
    label: "Week4 Notes",
    url: "week4/index.html"
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