const invoice=require('../models/invoicedb');
const shop = require('../models/shops');


module.exports.rate = (req,res) => {
//console.log(req.body.id);
//console.log(req.body.rate);
var shopid = '';

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
       
        shopid = doc.shopid;
       // res.send({success : true})
        console.log(shopid)



        try {
          
          var shoprating=3;
          shop.findOne({shop_id:shopid}, ( err , result) => {
              if(err) {
                  return;
              } 
             // console.log(result.rating);
              shoprating=result.rating;
             // console.log(shoprating)
             
          })
      
      
          invoice.count({shopid:shopid} ,function (err, result) {
                if (err) {
                    console.log(err);
                    return;
                }
      
                var invoicecount=result;
                var cusrating=parseInt(req.body.rate) ;
                
      
                var final = ((shoprating*invoicecount)+cusrating)/(invoicecount+1)
                 var finalshoprating=Math.round(final*10)/10;
      console.log(finalshoprating)
                const document={
                    rating:finalshoprating
                }
      
              shop.findOneAndUpdate({shop_id:shopid},document).then(function(){
                  shop.findOne({shop_id:shopid}).then(function(details){
                      
                          return res.status(400).json({
                              message:details
                          });
                          
                     
                  })
                  
              });
                
              
        
        });
      } catch (error) {
          return res.status(404).json({
              message:error
          })

        }










      })
      .catch(err => {
        console.error(err)
      })


    }

    


