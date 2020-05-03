const express= require('express')


const app=express()
const db=require('./db');
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/static', express.static('public'))

app.set("view engine","hbs");
app.get('/', (req,res)=>{
          res.render('index')
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
app.get('/customers', (req,res)=>{
    db.getallcustomers()
        .then((customers)=>{
            res.render('customers',{customers})
        })
        .catch((err)=>{
            res.send(err)
        })
});
app.get('/premium_customers', (req,res)=>{
    db.getallprm_customers()
        .then((premium_customers)=>{
            res.render('premium_customers',{premium_customers});
        })
        .catch((err)=>{
            res.send(err)
        })
});
app.get('/purchases', (req,res)=>{
    db.getallpurchases()
        .then((purview)=>{
            res.render('purchases',{purview})
        })
        .catch((err)=>{
            res.send(err)
        })
});
app.listen(2678,()=>console.log('Server started at http://localhost:2678'));
