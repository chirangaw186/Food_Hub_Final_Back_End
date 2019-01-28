const mongoose = require('mongoose');
const schema = mongoose.Schema;


const invoices = new schema({
 
    invoiceID:{
        type:String,
        required:true
    },
    shopid:{
        type:String,
        required:true
 
    },
    shopname:{
        type:String,
        required:true
        
    },

    customername:{
        type:String,
        required:true
    },
    customeremail:{
        type:String,
        required:true
    },
    
    
    orderedfooditems:{
        type:String,
        
        
    },
    totalprice:{
        type:String,
     
    },
    
    date:{
        type:String,
        required:true,
    },

    deliverystatus:{
        type:String,
        default:"Not Delivered" 
    
    },
    assignstatus:{
        type:String,       
        default:"Not Assigned" 
    
    },
    delivererID:{
        type:String,
        default:"Not Assigned" 
   
    
    },
    delivererName:{
        type:String,
        default:"Not Assigned"    
    },
    rating:{
        type:Number,
       // default : 0
    }



    
     
});

const InvoiceItem = mongoose.model('invoice',invoices);
module.exports=InvoiceItem;