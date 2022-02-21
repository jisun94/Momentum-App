'use strict';

const bgImages = [
  'img1.png',
  'img2.png',
  'img3.png',
  'img4.png',
  'img5.png',
  'img6.png',
];

const randomBg = bgImages[Math.floor(Math.random() * bgImages.length)];

const url = `url(./image/${randomBg})`;

document.body.style.backgroundImage = url;
