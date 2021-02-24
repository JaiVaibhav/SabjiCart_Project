const express= require('express');
const app= express();
const mongoose=require('mongoose');
const cart=require('./Models/cart');
const bodyParser=require('body-parser');

app.use(bodyParser.json());

const dbURI='mongodb+srv://<user>:<Password>@cluster0.ohlsd.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(result=>{console.log("connected");
        app.listen(3000)})
        .catch(err=>console.log(err));


//app.set('view engine','ejs');

    
app.get('/',(req,res)=>{
//res.sendFile('./views/index.html',{root:__dirname});
cart.find()
.then(result=>{
  //  console.log("Its here");
    
    res.json({carts:result})
})
.catch(err=>res.send(err));
});


// app.get('/cartcreate',(req,res)=>{
// //res.sendFile('./views/cartcreate.html',{root:__dirname});
// res.render('cartcreate')
// });


app.get('/cartdetails/:id',(req,res)=>{
cart.findById(req.params.id)
.then(result=>{
    res.json({cart:result});
})
.catch(err=>res.send(err));
});

// app.get('/cartupdate/:id',(req,res)=>{
//     cart.findById(req.params.id)
//     .then(result=>{
//         res.render('cartupdate',{cart:result});
//     })
//     .catch(err=>res.send(err));
    
//     });
    
app.put('/cartupdatedetails/:id',(req,res)=>{
cart.findByIdAndUpdate(req.params.id,req.body)
.then(result=>{
  console.log(result);
  res.json({status:'updated'});})
.catch(err=>console.log(err))

});
app.post('/cartcreate',(req,res)=>{
    
   const sc=new cart(req.body);
   sc.save()
   .then(result=>{
     console.log(result.id);
     res.json({status:"yyyy"})
   })
   .catch(err=>res.send("err"));
});

app.delete('/cartdelete/:id',(req,res)=>{
cart.findByIdAndDelete(req.params.id)
.then(result=>res.json({redirect:'/'}))
.catch(err=>console.log(err))
});