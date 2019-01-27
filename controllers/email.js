
const customers = require('../models/customer');
var nodemailer = require('nodemailer');
var randomstring = require("randomstring");
var bcrypt = require('bcrypt');

module.exports.emailconf = (req,res) => {
   
  var randomString = randomstring.generate({
    length: 6,
   
  
  }) 
customers.find({customeremail : req.body.email }).then(function(details){
//console.log(details);
       if(details.length<1){
       res.send({'success' : false});
       }

       else{
        bcrypt.hash(randomString,10,(err,hash)=>{
          if(!err){ 
     
         customers.findOneAndUpdate(
          {
            customeremail: req.body.email  // search query
          }, 
          {   
            password:hash  // field:values to update
          },
          {
            new: true,                       // return updated doc
            runValidators: true              // validate before update
          })
        .then(doc => {
          console.log(doc)
        })
        .catch(err => {
          console.error(err)
        })

        console.log('PASSWORD CHANGED!!'+randomString);
        res.send({'success' : true})
         
      }
    })
        
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'foodhub.srilanka@gmail.com',
            pass: 'foodhub123'
          }
        });
        
        
          
        
        
        var mailOptions = {
          from: 'foodhub.srilanka@gmail.com',
          to: req.body.email,
          subject: 'Reset Password', 
          text: 'Dear Customer, Use '+randomString+' for login to the system.'
                  +'\n----FoodHub team----'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        
        }
          });
       

        
       



}




















/*function emailconf(email,res){
var nodemailer = require('nodemailer');
var randomstring = require("randomstring");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



var randomString = randomstring.generate({
  length: 6,
 

}) 

MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("mydb");
var query = { Email: email  };
dbo.collection("Customer").find(query).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
 

 if(result==0){
   console.log('no user');
  res.send({'message' : 'user exist', 'success' : false})
  
 }
else{
  
  res.send({'message' : 'user exist', 'success' : true});

var dbo = db.db("mydb");
dbo.collection("Customer").updateOne(
  { Email: email },
  {
    $set: { Password: randomString },
    $currentDate: { lastModified: true }

 
})

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'foodhub.srilanka@gmail.com',
    pass: 'foodhub123'
  }
});


  


var mailOptions = {
  from: 'foodhub.srilanka@gmail.com',
  to: email,
  subject: 'Reset Password', 
  text: 'Dear Customer, Use '+randomString+' for login to the system.'
          +'\n----FoodHub team----'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}
  });
});


}

module.exports.emailconf = emailconf;


*/