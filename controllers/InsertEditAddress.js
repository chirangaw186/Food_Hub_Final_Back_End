
const customer=require('../models/customer');
module.exports.inserteditaddress= (req,res) => {

     customer .findOneAndUpdate(
        {
          customeremail: req.body.email  // search query
        }, 
        {   
          address:req.body.address   // field:values to update
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












/*function inserteditaddress(address,email,res){
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo.collection("Customer").updateOne(
      { Email: email },
      {
        $set: { Address: address },
        $currentDate: { lastModified: true }
  
     
    })
    
  });
  }
  module.exports.inserteditaddress = inserteditaddress;*/