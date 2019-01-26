const locations = require('../models/location');



module.exports.getdestination = (req,res) => {



  locations.findOne({InvoiceID : "I1"}).then(function(details){

       console.log(details[0]);

       res.send({'c_coordinates' : details.c_coordinates });

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

