// afficher le titre dans la console
document.title;
// modifier le titre du dom
document.title = "Modifying the DOM";
//afficher les enfants du deuxieme element enfants 
for (child of document.body.children) {
    console.log(child);
}
// changer la couleur du background du body
const body = document.querySelector('body');
const hexValues = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const value = document.querySelector('#background');

function changeBodyBackgroundColor() {
    let hex = "#";
    for (i = 0; i < 3; i++){
        const index = Math.floor(Math.random() * hexValues.length)
        hex+= hexValues[index]
    }

    body.style.backgroundColor = hex;
}
changeBodyBackgroundColor();