const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// database
const db = require('./config/database');

//test db
// db.authenticate()
//   .then(() => console.log('Db connected...'))
//   .catch(err) => console.log('Error:' err))
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

//middleware for handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res) {
//   res.send('index');
// });

//index route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

// Gig routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
