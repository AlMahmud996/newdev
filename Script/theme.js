// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

function clickChangeBg() {

    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let rgbValue = "#" + randomColor;
    document.body.style.backgroundColor = rgbValue;
}

document.getElementById('theme-btn').addEventListener("click", function() {
    const bgColor = getRandomColor();
    document.body.style.backgroundColor = bgColor;
})
