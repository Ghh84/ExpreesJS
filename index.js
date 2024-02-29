const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const userApi = require('./route/api/usersApi');
const users= require('./users');

const app = express();

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Set static folder
//app.use(express.static(path.join(__dirname, 'dist')));
// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Users App',
    users
  })
);

// Members API Routes
app.use('/api/users', userApi);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));