const express = require('express');
const { render } = require('./dist/bundle_server');
const app = express();

app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>React SSR</title>
    </head>
    <body>
      <div id="root">${render()}</div>
    </body>
    </html>
  `)
});

app.use(express.static('.'));
app.listen(3000, function() {
  console.log('app listening on port 3000');
});
