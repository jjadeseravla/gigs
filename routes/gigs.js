const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

//get gig list
router.get('/', (req, res) =>
  Gig.findAll() //method in SQL that returns a promise
    .then(gigs => {
      res.render('gigs', {
        gigs:gigs
      });
    })
    .catch(err => console.log(err)));

//display add gig form
router.post('/add', (req, res) => res.render('add'));

//add a gig
// router.post('/add', (req, res) => {
//   const data = {
//     title: 'make a wordpress website',
//     technologies: 'wordpress, php, html, css',
//     budget: '£1000',
//     description: 'this is a role for intermediates',
//     contact_email: 'alvaaaa@gmail.com'
//   }

  let { title, technologies, budget, description, contact_email } = req.body;
  let errors = [];

//validate fields
  if(!title) {
    errors.push({ text: 'Please add a title' });
  }
  if(!technologies) {
    errors.push({ text: 'Please add technologies' });
  }
  if(!description) {
    errors.push({ text: 'Please add a description' });
  }
  if(!contact_email) {
    errors.push({ text: 'Please add a contact email' });
  }

  //check for errors
  if(errors.length > 0) {
    res.render('add', {
      errors,
      title,
      technologies,
      budget,
      description,
      contact_email
    });
  } else {
      //insert into table
      Gig.create({
        title: title,
        technologies: technologies,
        description: description,
        budget: budget,
        contact_email: contact_email
      })
      .then(gig => res.redirect('/gigs'))
      .catch(err => console.log(err));
    }
  //);
  //}

module.exports = router;
