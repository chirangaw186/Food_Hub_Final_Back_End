const invoice=require('../models/invoicedb');


module.exports.rate = (req,res) => {
//console.log(req.body.id);
//console.log(req.body.rate);

     invoice.findOneAndUpdate(
        {
          invoiceID: req.body.id  // search query
        }, 
        {
          rating:req.body.rate   // field:values to update
        },
        {
          new: true,                       // return updated doc
          runValidators: true              // validate before update
        })
      .then(doc => {
        console.log(doc)
        res.send({success : true})
      })
      .catch(err => {
        console.error(err)
      })




    }


