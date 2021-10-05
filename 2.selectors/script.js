const important = document.querySelectorAll(".important");
for ( item of important) {
    item.title = "Ceci est un element important"
}


const imgs = document.querySelectorAll("img");
for (item of imgs) {
    if  (!item.classList.contains("important")){
        item.style.display = "none" ;
    }
}

const p = document.querySelectorAll("p");

for (item of p) {
    function changeParaphColor() {
        let random = function () { return Math.floor(Math.random() * 256) }
        return "rgb(" + random() + "," + random() + "," + random()+ ")"
    }
    
    if (item.hasAttribute("class")) {
        console.log(item.classList);
    } else {
        item.style.color = changeParaphColor();
        console.log(item);
    }
}