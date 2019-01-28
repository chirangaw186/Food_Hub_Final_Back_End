const location = require('../models/location');
const invoice = require('../models/invoicedb');


module.exports.checkdelivererlocation = (req,res) => {

//console.log(req.body.id)
    location.findOne({invoiceID : req.body.id }).then(function(details){

        if(!details){
            console.log('no data');
        }
        else{
        //console.log(details.d_coordinates.latitude);
            res.send({'data': details.d_coordinates});
        }


     } );

  }


module.exports.checktofinish = (req,res) => {

    //console.log(req.body.id)
        invoice.findOne({invoiceID : req.body.id}).then(function(details){
    
            if(details.deliverystatus == 'Delivered'){
                        res.send({'success' : true})
            }
            else{
            //console.log(details.d_coordinates.latitude);
                        console.log('no data');
            }
    
    
         } );
    
      }