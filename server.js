const express= require('express')


const app=express()
const db=require('./db');
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/static', express.static('public'))

app.set("view engine","hbs");
app.get('/', (req,res)=>{
          res.render('index').catch((err)=>{
              res.send(err)
          })
});
app.get('/products', (req,res)=>{
    db.getallproducts()
        .then((products)=>{
            res.render('products',{products})
        })
        .catch((err)=>{
            res.send(err)
        })
});
app.get('/employees', (req,res)=>{
    db.getallemployees()
        .then((employees)=>{
            res.render('employees',{employees})
        })
        .catch((err)=>{
            res.send(err)
        })
});
app.listen(2678,()=>console.log('Server started at http://localhost:2678'));
