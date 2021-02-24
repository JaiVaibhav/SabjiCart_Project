const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const cartSchema=new Schema({
fname:{
    type:String,
    required:true
},
lname:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
phonenum:{
    type:String,
    required:true
},
streetline1:{
    type:String,
    required:true
},
streetline2:{
    type:String,
},
city:{
    type:String,
    required:true
},
state:{
    type:String,
    required:true
},
pincode:{
    type:String,
    required:true
},
noofchildren:{
    type:String,
    required:true
},
adults:{
    type:String,
    required:true
},
earningmembers:{
    type:String,
    required:true
},
lsc_hectare:{
    type:String,
    required:true
},
lsc_acre:{
    type:String,
    required:true
},
lso_hectare:{
    type:String,
    required:true
},
lso_acre:{
    type:String,
    required:true
},
k_fieldcrop_:
{
    type:[String]
    
},
k_horticulturecrop_:{
    type:[String]
    
},
k_foddercrop_:{
    type:[String]
    
},
k_flowercrop_:{
    type:[String]
    
},
k_agroforestry_:{
    type:[String]
    
},
r_fieldcrop_:
{
    type:[String]
    
},
r_horticulturecrop_:{
    type:[String]
    
},
r_foddercrop_:{
    type:[String]
    
},
r_flowercrop_:{
    type:[String]
    
},
r_agroforestry_:{
    type:[String]
    
}
});

const cart=mongoose.model('Cart',cartSchema);
module.exports=cart;