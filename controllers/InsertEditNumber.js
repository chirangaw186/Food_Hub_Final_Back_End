

const customer=require('../models/customer');
module.exports.inserteditnumber = (req,res) => {

     customer .findOneAndUpdate(
        {
          customeremail: req.body.email  // search query
        }, 
        {
          mobileno:req.body.number  // field:values to update
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









/*function inserteditnumber(number,email,res){
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //var myobj = { Name:name };
  dbo.collection("Customer").updateOne(
    { Email: email },
    {
      $set: { MobileNo: number },
      $currentDate: { lastModified: true }

   
  })
  
});
}
module.exports.inserteditnumber = inserteditnumber;*/