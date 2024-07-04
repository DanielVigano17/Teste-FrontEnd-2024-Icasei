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

app.post('/api/search', async (req, res) => {
    const query = await req.body.searchInput;
    
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: query,
                key: process.env.API_KEY_YOUTUBE,
                type: 'video',
                maxResults : 12,
            }
        });
        res.render("index", { videos: response.data.items });
        // res.json(response.data.items);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(4001, () => console.log('Listening on port 4000!'));