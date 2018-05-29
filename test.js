window.onload = function(){
var oDiv = document.getElementById('content');
var oUl = document.getElementsByTagName('ul')[0];
var oLi = document.getElementsByTagName('li');
oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
oUl.style.width = oLi[0].offsetWidth * oLi.length + 'px';
function move(){
    if(oUl.offsetLeft <  - oUl.offsetWidth/2){
        oUl.style.left = '0';
    }
    oUl.style.left = oUl.offsetLeft - 2 + "px";
};
setInterval(move, 30);
};

    