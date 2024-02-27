const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const users = require('../../users');

const idFilter = req => user => user.id === parseInt(req.params.id);

// Gets All users
router.get('/', (req, res) => res.json(users));

// Get Single User
router.get('/:id', (req, res) => {
  const found = users.some(idFilter(req));

  if (found) {
    res.json(users.filter(idFilter(req)));
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
});

//cretate users
router.post('/', (req, res) => {
    const newUser = {
      ...req.body,
      id: uuid.v4(),
      status: 'active'
    };
  
    if (!newUser.name || !newUser.email) {
      return res.status(400).json({ msg: 'Please include a name and email' });
    }
  
    users.push(newUser);
    res.json(users);
    // res.redirect('/');
  });

module.exports=router;