const mongoose = require('mongoose');
const schema = mongoose.Schema;


const Details = new schema({
   
    invoiceID: {
        type: String,
        required: true,

    },

    c_coordinates:{

        latitude:{
        type:Number,        
        required:true,
        },
        longitude:{
            type:Number,        
            required:true,
        }
        
    },

    d_coordinates:{

        latitude:{
        type:Number,        
        default :0
        },
        longitude:{
            type:Number,        
            default :0
        }
        
    },
    address:{
        type:String,
        required:true,
       
        
    }
    


});

const Detailsitem = mongoose.model('locations', Details); 
module.exports = Detailsitem;