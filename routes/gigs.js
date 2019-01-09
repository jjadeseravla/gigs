const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

//get gig list
router.get('/', (req, res) =>
  Gig.findAll() //method in SQL that returns a promise
    .then(gigs => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch(err => console.log(err)));

//add a gig
router.get('/add', (req, res) => {
  const data = {
    title: 'looking for a react developer',
    technologies: 'react, javascript, html, css',
    budget: '£4000',
    description: 'this will be a 3 month contract',
    contact_email: 'jade@gmail.com'
  }

  let { title, technologies, budget, description, contact_email } = data;

  //insert into table-hints
  Gig.create({
    title: title,
    technologies: technologies,
    description: description,
    budget: budget,
    contact_email: contact_email
  })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));
});


module.exports = router;
