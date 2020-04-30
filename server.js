const express= require('express')


const app=express();
const db=require('./db')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine","hbs")
app.get('/', (req,res)=>{
    db.getallproducts()
      .then((products)=>{
          res.render('products',{products})
      })
      .catch((err)=>{
          res.send(err)
      })
})



app.listen(2678,()=>console.log('Server started at http://localhost:2678'))
