const mlp = './img/mylilpony.gif'
const mongoScrape = './img/mongoScrape.png'
const notify = './img/notify2.gif'
const dolo = './img/dolo.png'
const giphy = './img/GiphyBoard.gif'
const trivia = './img/triviaGame.gif'
const buddy = './img/badass.png'
const burger = './img/burger.png'
const hang = './img/hangmanGame.gif'
const mgmt = './img/bamazonManager.gif'
const cartman = './img/cartman.png'

export default function() {
  // a big array of my project info
  return [
    {
      name: 'Memory Game',
      description: 'click a square only once',
      site: 'https://shapyro.github.io/memory-game/',
      image: mlp,
      techUsed: ['CSS', 'HTML', 'JS', 'React']
    },
    {
      name: 'Mongo Scraper',
      description: 'Scrape Hacker News Articles',
      site: 'https://hn-scraper.herokuapp.com/',
      image: mongoScrape,
      techUsed: ['CSS', 'HTML', 'JS', 'Mongo', 'Node']
    },
    {
      name: 'Notify',
      description: 'Find live shows in major U.S. cities',
      site: 'https://shapyro.github.io/notify/',
      image: notify,
      techUsed: ['CSS', 'HTML', 'JS']
    },
    {
      name: 'Dolo',
      description: 'Donation Location App',
      site: 'http://www.dolo.io/',
      image: dolo,
      techUsed: ['CSS', 'Express', 'HTML', 'JS', 'Node', 'MySQL']
    },
    {
      name: 'Giphy Board',
      description: 'A Board of Gifs from Giphy using jQuery and animation',
      site: 'https://shapyro.github.io/GiphyBoard/',
      image: giphy,
      techUsed: ['CSS', 'HTML', 'JS']
    },
    {
      name: 'Trivia Game',
      description: 'A timed trivia game of cosmic proportions',
      site: 'https://shapyro.github.io/TriviaGame/',
      image: trivia,
      techUsed: ['CSS', 'HTML', 'JS']
    },
    {
      name: 'Buddy Check',
      description: 'Take a Quiz, Find a Friend',
      site: 'https://buddycheck.herokuapp.com/',
      image: buddy,
      techUsed: ['CSS', 'Express', 'HTML', 'JS', 'Node']
    },
    {
      name: 'Chomp Burger',
      description: 'Make and Devour Burgers',
      site: 'https://lit-dawn-22928.herokuapp.com/',
      image: burger,
      techUsed: ['CSS', 'Express', 'HTML', 'JS', 'MySQL', 'Node']
    },
    {
      name: 'Node Hangman',
      description: 'Hangman, in plain text',
      site: 'https://github.com/shapyro/node-hangman/',
      image: hang,
      techUsed: ['JS', 'Node']
    },
    {
      name: 'Bamazon',
      description: 'Back End Inventory Management Server',
      site: 'https://github.com/shapyro/Bamazon/',
      image: mgmt,
      techUsed: ['JS', 'MySQL', 'Node']
    },
    {
      name: 'Click-A-Cartman',
      description: 'A SouthPark Game for the Ages',
      site: 'https://shapyro.github.io/week-4-game/',
      image: cartman,
      techUsed: ['CSS', 'HTML', 'JS']
    }
  ]
}