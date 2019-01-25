const invoices = require('../models/invoicedb');
const customers = require('../models/customers');
//var result;

var alldata = ["",""];  
module.exports.invoices = (req,res) => {



  invoices.find().then(function(details){

    
    if(details.length<1){      
      console.log('no such data');
    }
    else{
      alldata[0] = details;

      customers.find({email : details.customeremail}).then(function(customer_details){
        if(customer_details.length<1){      
          console.log('no such data');
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
