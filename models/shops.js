const mongoose = require('mongoose');
const schema = mongoose.Schema;


const Details = new schema({

    shop_id: {
        type: String,
        unique: true,
        required: true,
    },

    email: {
        type: String,
        required: true,

    },
    shop_owner_name: {
        type: String,
        required: true
    },

    shop_name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        minlength: 5,

    },
    address: {
        type: String,
        required: true
    },

    contact_no: {
        type: String,
        required: true,
        minlength : 10,
        maxlength : 10

    },
    description: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },

    shopstatus:{
        type: String
    }






});

const Detailsitem = mongoose.model('shop', Details);//'details' is mongodb name Details is the schema name;register is collection name;
module.exports = Detailsitem;