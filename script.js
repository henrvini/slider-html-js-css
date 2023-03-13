let count = 0;
document.getElementById("radio1").checked = true;

const radios = document.querySelectorAll("input[type=radio]");

setInterval(() => {
    nextImage();
}, 2000);

const nextImage = () => {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById(`radio${count}`).checked = true;
};

radios.forEach((radio) => {
    radio.addEventListener("click", (event) => {
        // console.log(event.target)
        const position = event.target.id.slice(-1);
        count = position -1;
    });
});
