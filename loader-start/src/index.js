require('./index.scss')

import happy from './happy.jpg'
import logo from './logo.png'

let imgContainer = document.querySelector('#img');
let count = 0;
function getImg(src){
    let img = new Image();
    img.src = src;
    img.className = 'img' + count++;
    imgContainer.appendChild(img);
}
getImg(happy);
getImg(logo);





