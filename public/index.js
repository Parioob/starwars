'use strict';

var quotes = [{
  'author': '- Yoda',
  'quote': 'When 900 years old, you reach… Look as good, you will not.'
}, {
  'author': '- Senator palpatine',
  'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
  'author': '- Count Dooku',
  'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
  'author': '- Darth vader',
  'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
  'author': '- Princess leila',
  'quote': 'Aren\'t you a little short for a storm trooper?'
}, {
  'author': '- Yoda',
  'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
  'author': '- Qui-Gon Jinn',
  'quote': 'Your focus determines your reality'
}, {
  'author': '- Yoda',
  'quote': 'Do. Or do not. There is no try.'
}, {
  'author': '- Obi-Wan-Kenobi',
  'quote': 'In my experience there is no such thing as luck.'
}, {
  'author': '- Yoda',
  'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
  'author': '- Darth Vader',
  'quote': 'The Force is strong with this one.'
}];

//We need to developp three functions in order to manage the three type of request.


//full random Quote with no parameters : As a User, I want to generate a random quote.
function getRandomQuote()
{
  var randomIndex = Math.floor(Math.random()*quotes.length);
  var randomQuote = quotes[randomIndex];
  console.log("\nAuthor : " + randomQuote.author);
  console.log(randomQuote.quote);
}
getRandomQuote();



//As a User, I want to see the character name of the quote, first Try.
/*function authorOfQuote(theQuote)
{
  for(var i =0; i<quotes.length; i++)
  {
    if(quotes[i].quote == theQuote)
    {
      console.log("\n" + quotes[i].author);
    }
  }
}
authorOfQuote("The Force is strong with this one.");*/



//As a User, I want to see the character name of the quote, Second Try.
function CharaQuote(Quote)
{
  for(var i =0; i<quotes.length; i++)
  {
    var reg = quotes[i].quote.search(Quote);
    if(reg != -1)
    {
      console.log("\n" + quotes[i].author);
    }
  }
}
CharaQuote("Force"); //Pour l'instant on rentre en "dur" la valeur de la Quote qu'on désire analyser.
