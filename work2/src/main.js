require('./main.css');
var show = require('./show');

var app = document.getElementById('app');

app.innerHTML = show('Webpack');
