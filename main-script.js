const sfbutton = document.getElementById('sf1');
const lunabutton = document.getElementById('luna1');

window.onload = main();

function main() {
    sfbutton.addEventListener('click', () => {
        window.open('sf.html', '_blank');
        window.close();
    });
    lunabutton.addEventListener('click', () => {
        window.open('luna.html', '_blank');
        window.close();
    })
}



