const btn_click = document.getElementById('click-btn');

btn_click.addEventListener('click', () => {
    const picture = document.createElement('span');
    picture.classList.add('click-pic');
    picture.innerHTML = '<img src="../images/development.svg" alt="Picture">';
    console.log("it works");
    console.log(picture)
    const picDrop = document.getElementsByClassName('click-cont')[0];
    picDrop.appendChild(picture);
})