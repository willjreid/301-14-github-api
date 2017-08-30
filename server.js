const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const requestProxy = require('express-request-proxy');
console.log(process.env.DARRYL, '= Darryl');

app.use(express.static('./public'));

app.get('/github/*', proxyGitHub);

function proxyGitHub(req, res, next){
  console.log('Routing a GitHub AJAX request for ', req.params[0]);
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(req, res);
}

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
