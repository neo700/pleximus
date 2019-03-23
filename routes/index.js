const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const router = express.Router();
//const User = mongoose.model('User');
const fs = require('fs');


router.get('/',(req,res) => {
    // if(req.user.id)
    // {
    //   console.log(req.user.id)
    //   User.findOne({_id: req.user.id}, function(err,user){
    //     if(err)
    //       return err;
    //     else
    //     res.render('index/profile', {
    //       user:user
    //   })
        
    //   });
    // }
    // else
    res.render('index/login')
    
    console.log('jekk')
  });
  


module.exports = router;