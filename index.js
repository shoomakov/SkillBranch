import express from 'express';
import cors from 'cors';

const app = express();
const port = 8080;

function addition (queryOne, queryTwo) {
  const a = Number(queryOne) || 0,
        b = Number(queryTwo) || 0;

  return a + b;
}

app.use(cors());
app.get('/taskA', (req, res) => {
  const query  = req.query,
        result = addition(query.a, query.b);

  return res.send(String(result));
  });
//});

app.listen(port, () => {
  console.log(`Your app listening on port ${port}!`);
});
