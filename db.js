const mysql= require('mysql2')

const connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'BlessRNG',
    database: 'dummy'

});
function getallproducts(){
    return new Promise(function(resolve,reject)
    {
        connection.query(
        'select * from products',
        function(err,rows,cols){
            if(err) {reject(err) }
            else {resolve(rows) }
        
     }
    )
    });
}
function getallemployees(){
    return new Promise(function(resolve,reject)
    {
        connection.query(
            'select * from employees',
            function(err,rows,cols){
                if(err) {reject(err) }
                else {resolve(rows) }

            }
        )
    });
}
function getallcustomers(){
    return new Promise(function(resolve,reject)
    {
        connection.query(
            'select * from customers',
            function(err,rows,cols){
                if(err) {reject(err) }
                else {resolve(rows) }

            }
        )
    });
}
function getallpurchases(){
    return new Promise(function(resolve,reject)
    {
        connection.query(
        'select * from purview',
            function(err,rows,cols){
                if(err) {reject(err) }
                else {resolve(rows) }

            }
        )
    });
}
exports= module.exports={
    getallproducts,
    getallemployees,
    getallcustomers,
    getallpurchases
};