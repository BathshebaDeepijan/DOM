let ol = document.querySelector("ol");
let li1 = ol.lastElementChild;
let li2 = ol.firstElementChild;
ol.insertBefore(li1, li2);

let p = document.querySelectorAll("p");
let allH2 = document.querySelectorAll("h2");
let div = document.querySelector("div");
let secondH2 = allH2[2];
let thirdH2 = allH2[1];
thirdH2.parentElement.replaceChild(secondH2, thirdH2);
div.insertBefore(thirdH2, p[4]);



let main = document.querySelector("main");
let section = main.children[2]
section.remove()