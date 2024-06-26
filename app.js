
var i = 0;
var time = 3000;

function changeImg() {
    document.carousel.src = data[i];

    if (i < data.length - 1) {
        i++
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time)
}