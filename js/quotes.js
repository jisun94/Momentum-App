'use strict';

const quotes = [
  {
    quote: 'Fake it until you make it',
  },

  {
    quote:
      '“All our dreams can come true, if we have the courage to pursue them.”',
  },
  {
    quote: '“Togetherness, for me, means teamwork.”',
  },
  {
    quote:
      '“Laughter is timeless, imagination has no age, dreams are forever.”',
  },
];

const quote = document.querySelector('#quotes span');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
