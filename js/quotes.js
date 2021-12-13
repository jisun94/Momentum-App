'use strict';

const quotes = [
  {
    quote: 'Chocolate is made from beans so chocolate is a vegetable ',
    name: 'Summer Lee',
  },
  {
    quote: 'Sky is blue, Roses are red and cats are cute 😻',
    name: 'Jisun Lee',
  },
  {
    quote: 'Having dinner with family is the easiest way to be happy',
    name: 'KawaiPotato',
  },
];

const quote = document.querySelector('#quotes span:first-child');
const name = document.querySelector('#quotes span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
name.innerText = todaysQuote.name;
