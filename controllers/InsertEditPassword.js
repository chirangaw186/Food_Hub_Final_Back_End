var bcrypt = require('bcrypt');
const customer=require('../models/customer');
module.exports.inserteditpassword = (req,res) => {


  bcrypt.hash(req.body.password,10,(err,hash)=>{
    if(!err){
     customer .findOneAndUpdate(
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

    }
  })




    }











/*function inserteditpassword(password,email,res){
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  dbo.collection("Customer").updateOne(
    { Email: email },
    {
      $set: { Password: password },
      $currentDate: { lastModified: true }

   
  })
  
});
}
module.exports.inserteditpassword = inserteditpassword;
*/