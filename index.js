require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({optionsSuccessStatus: 200}));  
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');  
});

app.get('/api/whoami', (req, res) => {
  let resJson = {
    ipaddress: req.ip,
    language: req.get('Accept-Language'),
    software: req.get('User-Agent'),
  };
  res.json(resJson);
});

let listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is running on port: ' + listener.address().port);
});
