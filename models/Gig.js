const Sequelize = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gig', {
  title: {
    type: Sequelize.STRING
  },
  technologies: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
},
  {
    timestamps: false
  }
  // createdAt: {
  //       field: 'created_at',
  //       type: Sequelize.DATE,
  //   },
  //   updatedAt: {
  //       field: 'updated_at',
  //       type: Sequelize.DATE,
  //   }
)

module.exports = Gig;
