const location = require('../models/location');


module.exports.updatedriverlocation = (req,res) => {

console.log(req.body.latitude)
    location.findOneAndUpdate(
        {
            invoiceID: req.body.id  // search query
        }, 
        {
            d_coordinates:{
                
                latitude : req.body.latitude,
                longitude : req.body.longitude 
                
            }// field:values to update
        },
        {
          new: true,                       // return updated doc
          runValidators: true              // validate before update
        })
      .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
      })

  }
