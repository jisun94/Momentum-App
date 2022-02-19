'use strict';

const images = ['img1.png', 'img2.png', 'img3.png'];

const randomBg = images[Math.floor(Math.random() * images.length)];

const url = `url(./image/${randomBg})`;

const bg = document.querySelector('#bg');
bg.style.backgroundImage = url;
