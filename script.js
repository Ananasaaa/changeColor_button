const div = document.createElement('div');
const p = document.createElement('p');
const button = document.createElement('button');

p.textContent = 'Space is a vast, mysterious realm filled with stars, planets, and galaxies, inspiring endless exploration and scientific discovery.'
p.style.color = 'red';
p.style.fontSize = '20px';

button.textContent = 'Change Color!';
button.style.backgroundColor = 'orange';
button.style.padding = '10px';
button.style.border = 'none';

const firstColor = 'red';
const secondColor = 'green';
let color = true;

function changeColor() {
    if(color) {
        p.style.color = secondColor;
    } else {
        p.style.color = firstColor;
    }
    color =! color;
}

button.addEventListener('click', changeColor);

div.appendChild(p);
div.appendChild(button);
document.body.appendChild(div);




