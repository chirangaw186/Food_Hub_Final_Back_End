var bcrypt = require('bcrypt');

const customer = require('../models/customer');


module.exports.signupconfirm = (req,res) => {


  customer.find({customeremail : req.body.email}).then(function(details){

    
    if(details.length>1){
      
      res.send({'success' : false});
      console.log('done');

    }
      else{
       
        bcrypt.hash(req.body.password,10,(err,hash)=>{
          if(!err){
            
              var det = new customer({
                 

                  customeremail:req.body.email,                
                  password:hash,
                  customername:req.body.name,
                  address:req.body.address,
                  mobileno:req.body.number,
                  type : 'customer'
               
                });


            det.save((err, doc) => {
             // console.log('hereeehhhhheeeesssssseee');
              if (!err) {
                console.log("sign up successfull");
                res.send({ 'success': true });
                
              }

              else{
                console.log(err);
              }
      //console.log('no such data');
    
  
  })

}
else
console.log('error');

        })

  

      }
    })
  }

/*
module.exports.signup=(req,res,next)=>{ 
   // var rnd = Math.floor(Math.random()*(1000000-100000+1)+100000)
   user.find({ email:req.body.email} ).then(function(details){
    if(details.length>0){
        return res.status(400).json({
            message:"email exist"
        });
        
    }

    else{
      
        if(req.body.code!=rnd)
            {
                console.log("wrong code")
                return res.status(500).json({
                 message:"check email"
                });
            }
            else{


        bcrypt.hash(req.body.pass,10,(err,hash)=>{
            if(err){
                return res.status(300).json({
                    error:err
                });
            }
            else{  
           
                var det = new User({
                   
                    email:req.body.email,
                    altemail:req.body.altemail,
                    password:hash,
                    username:req.body.name,
                    address:req.body.address,
                    mobile:req.body.mobile,
                    type:req.body.type,
                    code:req.body.code  
                   
                      });
                det.save((err,doc)=>{
                    if(!err){
                        res.status(200).send(doc);
                        console.log("signed")
                        console.log(doc);
                    }
                    else{
                        console.log('Error in sending Employees :'+ JSON.stringify(err,undefined,2));
                        return res.status(500).json({
                            error:err
                        });
                    }
                    });
                }
                
                    /*Details.create(req.body).then(function(details){
                    res.send(details);
                }).catch(next);
                
              });

            }
        
            }
            });
         
        }
 
 */
 /*
 function signupconfirm(name,email,address,number, password, res){
 
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { Email: email };
    dbo.collection("Customer").find(query).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
      if (result == 0) {

       res.send({ 'message': 'correct', 'success': true });
          MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myobj = { Name: name, Email: email, Address: address, MobileNo: number, Password: password };
            dbo.collection("Customer").insertOne(myobj, function (err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            //  customer.save()



            });
          });


         // console.log(name + email + address + number + password);
        
      }
      else {

        res.send({ 'message': 'already signup', 'success': false })



      }
    });
  });
 }
 module.exports.signupconfirm = signupconfirm;*/