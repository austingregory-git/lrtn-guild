const axios = require('axios');
const Nightmare = require('nightmare');
const cheerio = require('cheerio');

const url = 'https://worldofwarcraft.com/en-us/guild/us/kelthuzad/lemme-run-the-numbers';
const nightmare = Nightmare({show : true })
/*axios.get(url)
  .then(response => {
    let html = response.data;
    console.log(getData(html));
  })
  .catch(error => {
    console.log(error);
  })*/
  
nightmare
  .goto(url)
  .wait('body')
  .evaluate(() => document.querySelector('body').innerHTML)
  .end()
  .then(response => {
    console.log(getData(response));
  }).catch(err => {
    console.log(err);
  });  

let getData = html => {
  data = [];
  const $ = cheerio.load(html);
  $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
    data.push({
      title : $(elem).text(),
      link : $(elem).find('a.storylink').attr('href')
    });
  });
  return data;
}0