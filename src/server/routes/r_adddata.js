const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");

const Contact = require("../models/m_contacts");
const User = require("../models/m_user");

const contacts = require("../data/contacts");

const users = require("../data/users")


router.get("/", (req, res) => {
  res.send('welcome to add data')
})
router.get("/insertcontacts", (req, res) => {

  Contact.insertMany(contacts)
    .then((data) => {
      res.send('doneee')
    })
    .catch((err) => {
      res.send(err)
    })


})

router.post("/insertuser", (req, res) => {

  var promises = users.map((item) => {

    return bcrypt.genSalt(10)
      .then((salt) => {
        return bcrypt.hash(item.password, salt)
      })
      .then((hash) => {
        item.password = hash;
        return item
      })

  });//end promises = users.map

  Promise.all(promises)
    .then((results) => {
      console.log(results)
      User.insertMany(results)
        .then((data) => {
          res.json(data)
        })
        .catch((err) => {
          res.json(err)
        })
    })

})//end router.post("/insertuser"




module.exports = router;
