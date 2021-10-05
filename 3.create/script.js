function randomColorLearners() {
    let random = function () { return Math.floor(Math.random() * 256) }
    return "rgb(" + random() + "," + random() + "," + random() + ")"
}
const nameOfLearners = ["Antoine Ghysens", "Aurore Remy", "Baptiste Geron", "Batsheba Deepijan", "Bruno Presti", "Fabrice Castrogiovanni", "Fanny Fraiture",
    "Francis François", "Frederic Van Overmeire", "JC Molhant", "Maxim K.", "Michael Tesfay", "Philippe Meulemans", "Raoni Gillet", "René", "Rouslan Boyko",
    "Stephane Genet", "Thomas Backers", "Tiffany Dessouroux"];
let article = document.querySelector('article');
for (item of nameOfLearners) {
    let section = document.createElement('section');
    article.appendChild(section);

    let par = document.createElement('p');
    let text = document.createTextNode(item);

    section.appendChild(par);
    par.appendChild(text);

    let randomColor = randomColorLearners;
    section.style.backgroundColor = randomColor();
}
//If the background is dark the text should be white, if the background is light the text should be black
/*const colorPicker = () => {
    let red = rand(225);
    let green = rand(225);
    let blue = rand(225);
    let brightness = Math.sqrt((.299 * red * red) + (.587 * green * green) + (.114 * blue * blue));
    return { "color": rgb(${red}, ${green}, ${blue}), "brightness": brightness }
}*/
// Find a way so that everytime you load the page the order of the elements changes!
/*const shuffleLearners = nameOfLearners => {
    for (i = nameOfLearners.length - 1; i >= 0; i--) {
        const randomNumber = Math.floor(Math.random() * (i + 1));
        const randomItem = nameOfLearners[randomNumber];

        nameOfLearners[randomNumber] = nameOfLearners[i];
        nameOfLearners[i] = randomItem;
    }
}
shuffleLearners(nameOfLearners);*/