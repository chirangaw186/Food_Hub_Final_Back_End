
const express= require('express');
const router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId;
//models
const User = require('../models/secuser');

const Deliverer=require('../models/deliverers');
//get a list from db
var bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
//controllerrs
const login = require('../controllers/login');
const shop = require('../controllers/shop');
const deliv = require('../controllers/deliv');
const cus_login =require('../controllers/cus_login');
const customer =require('../controllers/customer');
const Invoice=require('../controllers/invoice')
const fooditems=require('../controllers/fooditems')



const Customerloging = require('../controllers/LoginConfirm');
const Signupdetails = require('../controllers/SignupConfirm');
const ShopDetails = require('../controllers/ShopDetails');
const Invoices = require('../controllers/Invoices');
const Items = require('../controllers/FoodItemsMobile');
const InvoiceAdd = require('../controllers/InvoiceAdd');
const Deliverycheck = require('../controllers/DeliveryCheck')
const NavigateDeliverer = require('../controllers/NavigateDeliverer')
const GetDestination = require('../controllers/GetDestination')
const Paycash = require('../controllers/PayCash')




const Loginconfirm=require('../controllers/LoginConfirm')
const Logindetails=require('../controllers/LoginDetails')
const Inserteditname=require('../controllers/InsertEditName')
const Inserteditaddress=require('../controllers/InsertEditAddress')
const Inserteditnumber=require('../controllers/InsertEditNumber')
const Inserteditpassword=require('../controllers/InsertEditPassword')
const Forgetpassword=require('../controllers/email')

const DeliLoginConfirm=require('../controllers/DelivererLoginConfirm')
const DelivererForgetPassword = require('../controllers/DelivererForget')
const ImageUpload = require('../controllers/ImageUpload')
const DeliveryLoginDetails = require('../controllers/DelivererDetails')
const DeliInserteditname=require('../controllers/DeliInsertEditName')
const DeliInserteditnumber=require('../controllers/DeliInsertEditNumber')
const DeliInserteditaddress=require('../controllers/DeliInsertEditAddress')
const DelivererEditPassword = require('../controllers/DelivererChangePassword')
const UpdatedriverLocation = require('../controllers/UpdatedriverLocation')
const CheckDelivererLocation = require('../controllers/CheckDelivererLocation')
const Rating = require('../controllers/Rating')




//llogin
router.post('/getuser',login.login);
router.post('/abc',login.signup);
router.post('/verifyemail',login.verifyemail);
router.post('/forgetpw',login.forgetpw);

router.post('/login',cus_login.login);
router.post('/signup',cus_login.signup);
router.post('/cus_verifyemail',cus_login.verifyemail);
router.post('/cus_forgetpw',cus_login.forgetpw);




//edit

router.put('/edit/:id',shop.editall);
router.put('/changepassword/:id',shop.changepwall);
router.get('/view/:id',shop.viewprofile);


router.put('/cus_edit/:id',customer.editall);
router.put('/cus_changepassword/:id',customer.changepwall);
router.get('/cus_view/:id',customer.viewprofile);


//deliverer

router.post('/del',deliv.registerDeliverer)
router.get('/showdel/:id',deliv.showDeliverers);
router.put('/editdel/:id',deliv.editDel)
router.get('/delview/:id',deliv.viewDel);

//invoice
router.get('/retrieveallinvoices/:id',Invoice.allInvoices);
router.get('/retrieveordereditems/:id',Invoice.orderedItems);
router.post('/deletefromInvoice',Invoice.deleteInvoice);
router.post('/invoicesbydate',Invoice.findByDate);

//itemsadd

//add
router.post('/fooddet',fooditems.addfood);
router.post('/imageup/:id',fooditems.imgupld);
router.post('/newfood',fooditems.newfood);

//show
router.get('/retrieve/:id',fooditems.retrieveitems);
router.post('/deletef',fooditems.deleteItem);

//update
router.post('/retrieveone',fooditems.retOneItem);
router.post('/foodupdate/:id',fooditems.updateFood);

//mobile


router.get('/shopdetails',ShopDetails.shopdetails);
router.post('/invoices',Invoices.invoices);
router.post('/logindetails',Customerloging.loginconfirm);
router.post('/signupdetails',Signupdetails.signupconfirm);
router.post('/items',Items.fooditems);
router.post('/invoiceinsert',InvoiceAdd.invoiceadd);
router.post('/deliverycheck',Deliverycheck.deliverycheck);
router.post('/navigatedeliverer',NavigateDeliverer.navigatediliverer);
router.post('/getdestination',GetDestination.getdestination);
router.post('/paycach',Paycash.paycash);
router.post('/updatedelivererlocation',UpdatedriverLocation.updatedriverlocation);
router.post('/checkdelivererlocation',CheckDelivererLocation.checkdelivererlocation);
router.post('/checktofinish',CheckDelivererLocation.checktofinish);
router.post('/rate',Rating.rate);


router.post('/logindetails',Loginconfirm.loginconfirm);
router.post('/logindetailsedit',Logindetails.logindetailsedit); 
router.post('/editnamedetails',Inserteditname.inserteditname);
router.post('/editaddressdetails',Inserteditaddress.inserteditaddress);
router.post('/editnumberdetails',Inserteditnumber.inserteditnumber);
router.post('/editpassworddetails',Inserteditpassword.inserteditpassword);
router.post('/forgetpassword',Forgetpassword.emailconf);

router.post('/delivererloginconfirm',DeliLoginConfirm.delivererloginconfirm);
router.post('/delivererpasswordconfirm',DeliLoginConfirm.delivererpasswordconfirm)
router.post('/deliveryforgetpassword',DelivererForgetPassword.delivererforgetpassword)
router.post('/imageupload',ImageUpload.imageupload)
router.post('/delilogindetailsedit',DeliveryLoginDetails.deliverydetails)
router.post('/delieditnamedetails',DeliInserteditname.deliinserteditname);
router.post('/delieditnumberdetails',DeliInserteditnumber.deliinserteditnumber);
router.post('/delieditaddressdetails',DeliInserteditaddress.deliinserteditaddress);
router.post('/deliverereditpassworddetails',DelivererEditPassword.changepassword);



/*

router.post('/getuser',login.login);
router.post('/abc',login.signup);
router.post('/verifyemail',login.verifyemail);
router.post('/forgetpw',login.forgetpw);

router.put('/edit/:id',shop_cust.editall);
router.put('/changepassword/:id',shop_cust.changepwall);
router.get('/view/:id',shop_cust.viewprofile);
router.get('/showinvoice',shop_cust.showinvoice);

router.post('/del',deliv.registerDeliverer)
router.get('/showdel/:id',deliv.showDeliverers);
router.put('/editdel/:id',deliv.editDel)
router.get('/delview/:id',deliv.viewDel);
*/
module.exports=router;


