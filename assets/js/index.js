const btn_click = document.querySelector('#click-btn');
const picDrop = document.getElementsByClassName('click-cont')[0]; // grabs original containers class and sends picture to an array
const picture = document.createElement('span'); // creates image container

btn_click.addEventListener('click', () => {
    const clickImg = document.createElement('img'); // creates image tag upon click
    clickImg.src = "./assets/images/city.jpg"; // pulls in picture
    picture.className = 'click-pic'; // sets image containers class
    clickImg.className = 'image-1'; // sets image class
    picture.appendChild(clickImg) //appends image inside of image container
    picDrop.appendChild(picture); // appends image container inside of designated container
    
});

const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', () => {
    picture.remove();
})