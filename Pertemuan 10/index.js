const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const layouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());

app.use(express.static('public'));

app.use(session({
  secret: 'some_secret_key',
  cookie: {}
}));

app.use(layouts);
app.set('layout', 'layouts/main.ejs');

app.set("layout extractStyles", true)

app.set("layout extractScripts", true)

const index = require('./routes/index');
const auth = require('./routes/auth');
const todo = require('./routes/todo');

app.use('/', index);
app.use('/auth', auth);
app.use('/todo', todo);

app.listen(3000);
console.log('Server runs at port 3000...');