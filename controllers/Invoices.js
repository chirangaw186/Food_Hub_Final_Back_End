const invoices = require('../models/invoicedb');
const customers = require('../models/customer');
//var result;

var alldata = ["",""];  
module.exports.invoices = (req,res) => {



  invoices.find({delivererID : req.body.did}).then(function(details){

      
    if(details.length<1){      
      console.log('no invoice data');
    }
    else{
      alldata[0] = details;
      console.log(alldata[0]);
   
      customers.find({customeremail : details[0].customeremail}).then(function(customer_details){
        if(customer_details.length<1){      
          console.log('no customer data');
        }
else{
          alldata[1] = customer_details;

}

      })

    console.log(alldata[1]);
    res.send({'invoice_data' : alldata[0], 'customer_data' : alldata[1]});

    }
  })

 
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
}
