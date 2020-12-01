const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index',{
      name:'Tung'
  });
});
app.use('/users', userRoute);




app.listen(3000, () => {
  console.log(`Server listening at port 3000`)
})