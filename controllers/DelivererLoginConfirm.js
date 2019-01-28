const bcrypt = require('bcrypt');
const deliverers = require('../models/deliverers');


module.exports.delivererloginconfirm = (req,res) => {
  deliverers.find({email : req.body.email}).then(function(details){
 
          
            if(details.length<1){
              res.send({ 'success' : false});
             
            }
            else{
              bcrypt.compare(req.body.password,details[0].password,(err,result)=>{    
              
                if(err){
                  console.log(err);
                  res.send({ 'success' : false});
                }
              
                else if(result){
                console.log(details[0]);
                res.send({'success' : true , 'drivername': details[0].driverName, 'driverID':details[0].driverID });
    
                }
                else{
               
                  res.send({ 'success' : false});
                  }
          
              
              })
    
            }
             
              
            
    })
    
 }




















/*const deliverers = require('../models/deliverers');


module.exports.delivererloginconfirm = (req,res) => {

  deliverers.find({email : req.body.email , password : req.body.password}).then(function(details){

       if(details<1){
       res.send({'message' : 'no user', 'success' : false});
       }

       else{
  
         res.send({'email' : email, 'success' : true})
        
         } 
       
})


}



 */
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*function delivererloginconfirm(email,password,res){
 
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { Email: email,Password : password  };
  dbo.collection("Deliverer").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();


    if(result == 0){
     
        res.send({'message' : 'no user', 'success' : false});
    }
    else{
   
    res.send({'message' : 'user exist', 'success' : true})
   
    }
  

  });
});

 }

 module.exports.delivererloginconfirm = delivererloginconfirm;
 */