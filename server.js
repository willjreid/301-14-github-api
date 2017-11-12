const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const superagent = require('superagent');

app.use(express.static('./public'));
app.use(cors());

// proxy route for handling GitHub API requests
app.get('/github/*', (req, res) => {
  console.log('Routing a GitHub API request for ', req.params[0]);
  const url = `https://api.github.com/${req.params[0]}`
  superagent(url)
    .set(`Authorization`, `token ${process.env.GITHUB_TOKEN}`)
    .then(
      repos => res.send(repos.text),
      err => res.send(err)
    )
})

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
