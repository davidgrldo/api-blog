const express = require('express');
const app = express();

app.use(() => {
  console.log('hello world');
});
app.listen(4000);