const customer = require('../models/customer');


module.exports.logindetailsedit = (req,res) => {


  customer.find({customeremail : req.body.email}).then(function(details){

    if(details.length<1){
      console.log('no data');
    }
    else{
      
      res.send(details);
      console.log('done');
    }
  })


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