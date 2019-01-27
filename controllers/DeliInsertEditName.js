const deliverers=require('../models/deliverers');
module.exports.deliinserteditname = (req,res) => {

  deliverers.findOneAndUpdate(
        {
          email: req.body.email  // search query
        }, 
        {
          driverName:req.body.name   // field:values to update
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








/*function inserteditname(name,email,res){
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //var myobj = { Name:name };
  dbo.collection("Customer").updateOne(
    { Email: email },
    {
      $set: { Name: name },
      $currentDate: { lastModified: true }

   
  })
  
});
}
module.exports.inserteditname = inserteditname;
*/