let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'});
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));