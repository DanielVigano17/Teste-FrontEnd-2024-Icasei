let express = require('express');
const axios = require("axios");
let app = express();

require('dotenv').config({ path: '../.env' });

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index',{ videos: [] });
});

app.listen(4002, () => console.log('Listening on port 4002!'));