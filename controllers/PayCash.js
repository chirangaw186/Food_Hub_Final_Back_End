const invoices = require('../models/invoicedb');



module.exports.paycash = (req,res) => {


  invoices.findOneAndUpdate(
    {
      invoiceID: req.body.id  // search query
    }, 
    {
      deliverystatus: 'Delivered'  // field:values to update
    },
    {
      new: true,                       // return updated doc
      runValidators: true              // validate before update
    })
  .then(doc => {
    console.log('DELIVERY COMPLETE'); 
    res.send({'data' : doc}) 
  })
  .catch(err => {
    console.error(err)
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

