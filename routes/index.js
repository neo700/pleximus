const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcryptjs')
const router = express.Router();
const User = mongoose.model('user');
const level = mongoose.model('level');
router.get('/',(req,res) => {
  
    res.render('index/login')
    
  });
  
router.get('/dashboard',(req,res) => {
    level.find({})
      .then(levels => {
          
        res.render('index/dashboard', {
          levels: levels
        })
      })
    

    
})
router.get('/add',(req,res) => {
    
    res.render('index/add')

    
})
router.post('/login', (req,res)=>{

   email = req.body.email
   pass = req.body.password
   if(email == 'admin' & pass == 'admin'){
      
       res.redirect('dashboard')
   }
   else{
      
       res.redirect('/')
   }
   
    
});


router.post('/add', (req,res) => {
    var levels = {
        l1: req.body.l1,
        l2: req.body.l2,
        l3: req.body.l3,
        l4: req.body.l4,
        l5: req.body.l5,
      };

    new level(levels)
    .save()
    .then(levels => {
      res.redirect('/dashboard')
    })

})

module.exports = router;