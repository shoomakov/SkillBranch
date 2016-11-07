import express from 'express';

const port = 80;
const app = express();

function addition (queryOne, queryTwo) {
  const a = Number(queryOne) || 0,
        b = Number(queryTwo) || 0;

  return a + b;
}


app.get('/', function(req, res) {
  //let query = Number(0);
  const query  = req.query,
        result = addition(query.a, query.b);

  return res.send(String(result));

  //console.log(query.b);
  // if (isNaN(result) == true) {
  //   return res.send(String(0));
  // } else {
  //   return res.send(String(result));
  // }
});

app.listen(port, function (){
  console.log('app listening on port ' + port);
});
