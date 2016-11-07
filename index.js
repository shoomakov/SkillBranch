import express from 'express';
import cors from 'cors';

const app = express();
const port = 80;

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

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});

//
// app.get('/', function(req, res) {
//   //let query = Number(0);
//   const query  = req.query,
//         result = addition(query.a, query.b);
//
//   return res.send(String(result));
// });

// app.listen(port, function (){
//   console.log('app listening on port ' + port);
// });
