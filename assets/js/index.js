const btn_click = document.querySelector('#click-btn');
const picDrop = document.getElementsByClassName('click-cont-1')[0]; // grabs original containers class and sends picture to an array
const picture = document.createElement('span'); // creates image container
const clearBtn = document.querySelector('#clear');
const singleImg = document.getElementById('mult-img');
clearMid = document.getElementById('clear-mid')

const images = [
    "./assets/images/city.jpg",
    "./assets/images/animal.jpg",
    "./assets/images/bridge.jpg",
    "./assets/images/flower.jpg",
    "./assets/images/scene.jpg",
    ""
]

btn_click.addEventListener('click', () => {
    const clickImg = document.createElement('img'); // creates image tag upon click
    clickImg.src = "./assets/images/city.jpg"; // pulls in picture
    picture.className = 'click-pic'; // sets image containers class
    clickImg.className = 'image-1'; // sets image class
    picture.appendChild(clickImg) //appends image inside of image container
    picDrop.appendChild(picture); // appends image container inside of designated container
    
});


clearBtn.addEventListener('click', () => {
    picture.remove();
});

function changeImg (index) {
    singleImg.src = images[index];
}

let btn1 = document.getElementById('button1');
btn1.addEventListener("click", function() {changeImg(0); });
let btn2 = document.getElementById('button2');
btn2.addEventListener("click", function() {changeImg(1); });
let btn3 = document.getElementById('button3');
btn3.addEventListener("click", function() {changeImg(2); });
let btn4 = document.getElementById('button4');
btn4.addEventListener("click", function() {changeImg(3); });
let btn5 = document.getElementById('button5');
btn5.addEventListener("click", function() {changeImg(4); });

clearMid.addEventListener('click', () => {
    changeImg(5)
})