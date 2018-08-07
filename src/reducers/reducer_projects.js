const mlp = './img/mlp.png'
const mongoScrape = './img/mongoScrape.png'

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
  ]
}