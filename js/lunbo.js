var Imgs = ['img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg'];
var i = 0;
var img = document.getElementById('pics');

function nextImg() {
    i++;
    if (i >= Imgs.length) {
        i = 0;
    }
    pics.src = Imgs[i];
};

function lastImg() {
    i = i - 1;
    if (i == -1) {
        i = 3;
    }
    pics.src = Imgs[i];
};
window.onload = function () {
    var oDiv = document.getElementById('main');
    var timer = setInterval(nextImg, 2000);
    oDiv.onmouseover = function () {
        clearInterval(timer);
    };
    oDiv.onmouseout = function () {
        timer = setInterval(nextImg, 2000);
    };
}