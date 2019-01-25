const shops = require('../models/shops');


module.exports.shopdetails = (req,res) => {


  shops.find().then(function(details){

    
    if(details.length<1){
      console.log('no such data');
    }
    else
    console.log(details)
    res.send(details);
  })

 

}
