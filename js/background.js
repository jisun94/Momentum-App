'use strict';

const images = ['img1.png', 'img2.png', 'img3.png'];

const randomBg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.src = `image/${randomBg}`;
document.body.appendChild(bgImage);
