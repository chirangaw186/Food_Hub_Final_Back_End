const invoices = require('../models/invoicedb');


module.exports.navigatediliverer=(req,res)=>{

   
  invoices.findOneAndUpdate(
      {
          invoiceID : req.body.invoiceID
        },
      {
          deliverystatus: 'On Route'
      },
      {
       new : true,
       runValidators : true
      
        })
      .then(doc => {

            console.log(doc);

      })
      .catch(err => {

        console.error(err);
      })
      
    



   
}




