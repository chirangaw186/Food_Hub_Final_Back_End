const invoices = require('../models/invoicedb');
const ordereditems = require('../models/ordereditems');
const fooditems = require('../models/itemschema');


module.exports.invoiceadd = (req,res) => {

var l = req.body.itemids.length;

  invoices.findOne().sort({_id: -1}).then(function(details){

  
    
     var id = details.invoiceID;
       var integer = parseInt(id.split("I")[1]);   
       id = 'I' + (++integer).toString();

       
       var today = new Date();
       var dd = today.getDate();
       var mm = today.getMonth()+1;
       var yyyy = today.getFullYear();
       
       if(dd<10) {
           dd = '0'+dd
       } 
       
       if(mm<10) {
           mm = '0'+mm
       } 
       
       today = dd + '/' + mm + '/' + yyyy;

  
      var data = new invoices({
                 

        invoiceID:id,                
        shopid: req.body.shop_id,
        shopname: req.body.shopname,
        customername:req.body.customername,
        customeremail:req.body.customeremail,
        orderedfooditems: req.body.itemData,
        totalprice : req.body.total,
        date : today
        
        
       
       
      });

      data.save((err, doc) => {
        
         if (!err) {
           console.log("invoice added");
           res.send({ 'success': true });
         
           
         }
         else{
             console.log(err);
         }

  
})


for(var i=0;i<l;i++){

   var subprice = req.body.prices[i] * req.body.count[i];

var item = new ordereditems({
                 

    invoiceID:id,                
    itemid: req.body.itemids[i],
    itemname: req.body.itemData[i],
    unitprice : req.body.prices[i],
    orderedamount:req.body.count[i],
    subprice: subprice   


  });
  item.save((err, doc) => {
        
    if (!err) {
      console.log("ordered food added");
  
    }
    else{
        console.log(err);
    }


  })



  fooditems.findOneAndUpdate(
    {
      shopid: req.body.shop_id,
      itemid : req.body.itemids[i]  // search query
    }, 
    {
     $inc: {qty: -req.body.count[i]}  // field:values to update
    },
    {
      new: true,                       // return updated doc
      runValidators: true              // validate before update
    })
  .then(doc => {

    if(doc<1)
    console.log('no data changed')
    //console.log(doc)
    else
    console.log('quantity changed')
  })
  .catch(err => {
    console.error(err)
  })



}

  })
 
  

  }



   /*   else{
       
        bcrypt.hash(req.body.password,10,(err,hash)=>{
          if(!err){
           
              var det = new customer({
                 

                  email:req.body.email,                
                  password:hash,
                  customer_name:req.body.name,
                  address:req.body.address,
                  mobile_no:req.body.number,
               
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
*/
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