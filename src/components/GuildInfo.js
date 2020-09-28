const request = require('request')
request('https://worldofwarcraft.com/en-us/guild/us/kelthuzad/lemme-run-the-numbers', function (
  error,
  response,
  body
) {
  console.error('error:', error)
  console.log('body:', body)
})