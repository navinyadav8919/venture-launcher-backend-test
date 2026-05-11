const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT ;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/ping', (req, res) => {
  return res.json({ message: "Venture launcher is live!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
