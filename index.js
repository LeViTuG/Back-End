const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var authMiddleware = require('./middlewares/auth.middleware');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index',{
      name:'Tung'
  });
});
app.use('/users',authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);




app.listen(3000, () => {
  console.log(`Server listening at port 3000`)
})