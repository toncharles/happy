import express from 'express';

import './database/connection';

const app = express();

app.use('/users', (request, response) => {
  //console.log('teste');
  return response.json({})
});

app.listen(3333);