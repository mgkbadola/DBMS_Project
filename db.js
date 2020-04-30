const mysql= require('mysql2')

const connection= mysql.createConnection({
    host: 'localhost',
    user: 'shopper',
    password: 'shoppass',
    databse: 'shopdb'

})
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
    })

}
exports= module.exports={
    getallproducts
}