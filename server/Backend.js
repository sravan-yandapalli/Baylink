const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/data', (req, res) => {
  const { node, ph1, ph2 } = req.body;

  console.log(`Received data from ${node}: pH1=${ph1}, pH2=${ph2}`);
  res.send('Data received successfully');
});

app.listen(port, () => {
  console.log(`Server is running on http://192.168.1.4:${port}`);
});
