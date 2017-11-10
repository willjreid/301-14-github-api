const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');

app.use(express.static('./public'));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
