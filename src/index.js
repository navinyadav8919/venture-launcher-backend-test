const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');

dotenv.config();
const { PORT } = require('./config/server.config');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Venture Launcher Backend API is running',
    version: 'v1',
  });
});

app.use('/api', routes);

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    error: 'Route not found',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
