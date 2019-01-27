const drivers = require('../models/deliverers')


module.exports.imageupload = (req,res) => {

  console.log(req.body.email)
      drivers.findOneAndUpdate(
    {
      email: req.body.email  // search query
    }, 
    {
      imagepath:req.body.photo   // field:values to update
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



 

  //console.log(req.body)


  


}
 
 
 
 
 
 
 
 
 
 
 
 
 /*function logindetailsedit(email,res){
 
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { Email: email};
  dbo.collection("Customer").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    
    db.close();
    res.end(JSON.stringify(result));


  });
});

 }

 module.exports.logindetailsedit =  logindetailsedit;*/