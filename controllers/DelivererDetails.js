const driver = require('../models/deliverers');


module.exports.deliverydetails = (req,res) => {

driver.findOne({email : req.body.email}).then(function(details){


          if(details.length<1)
          console.log('no data');

          else{
            res.send(details)
            console.log('done')

          }
      
        })
 }
 /*
 module.exports.login=(req,res,next)=>{ 
  User.find({  $or:[{email:req.body.email} , {altemail:req.body.email}] })
  .then(function(details){
      
      if(details.length<1){
          res.status(400).send(details)
          console.log("no such email")

      }else{
      bcrypt.compare(req.body.password,details[0].password,(err,result)=>{    
          if(err){
              console.log(err)
          }
         
     else if(result){
        //res.status(200).send(details);

        //jwt
        
      jwt.sign({details},'secretkey',{ expiresIn: '30s' }, (err,token)=>{
          //res.json({ 
            //  token
          //})
          if(token){
             return res.status(200).json({Token : token,success:true});
          }else{
            return  res.status(200).json({success:false});
          }
          console.log(token ,details)
      });    
        console.log("pass")
              }
          else{
            res.status(400).send(details);
              console.log("faile")
          }     
  });
}
});

}
*/
 
 
 /*
 
 function loginconfirm(email,password,res){
 
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { Email: email,Password : password  };
  dbo.collection("Customer").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();


    if(result == 0){
     
        res.send({'message' : 'no user', 'success' : false});
    }
    else{
   
    res.send({'email' : email, 'success' : true})
   
    }
  

  });
});

 }

 module.exports.loginconfirm = loginconfirm;*/