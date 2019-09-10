const express = require('express');
const app = express();
const registrationRoute = express.Router();

var fs = require('fs');

registrationRoute.route('/registerUser').post(function (req, res) {
  let userInformation = req.body;
  fs.exists('user-credentials.json', function(exists){
    if(exists){
      console.log("yes file exists");
      fs.readFile('user-credentials.json', function readFileCallback(err, data){
        if (err){
          console.log(err);
        } else {
          obj = JSON.parse(data); 
          obj.push(userInformation);
          var json = JSON.stringify(obj); 
          fs.writeFile('user-credentials.json', json, 'utf8', function(err, data){
            res.send(JSON.stringify("Information Saved Successfully...!"));
          }); 
        }
      });
    }
    else{
      res.send(JSON.stringify("File Not Found To Write The Data....!"));
    }
  });
});

module.exports = registrationRoute;