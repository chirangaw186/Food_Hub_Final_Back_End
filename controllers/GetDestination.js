const locations = require('../models/location');



module.exports.getdestination = (req,res) => {



  locations.find({invoiceID : req.body.id }).then(function(details){

       //console.log(details[0].c_coordinates.latitude);

       res.send({'latitude' : details[0].c_coordinates.latitude,
        'longitude' : details[0].c_coordinates.longitude });

  })

}
/*
invoices.aggregate([
  {
    $lookup:
      {
        from: "customers",
        localField: "customeremail",
        foreignField: "customeremail",
        as: "invoice_customer"
      }
 }
]
).then(function(details){



if(details.length<1){
  console.log('cant find data');
}
else{
  console.log(JSON.stringify(details));
  res.send(JSON.stringify(details));
}

})

*/

