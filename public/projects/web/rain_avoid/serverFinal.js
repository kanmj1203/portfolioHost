const express = require('express');
const app = express();
const server = require('http').Server(app);
app.use(express.static(`${__dirname}`));
server.listen(52273, () => {
  console.log('Server running at http://127.0.0.1:52273');
});
