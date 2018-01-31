var mysql      = require('mysql');

function runQuery(query, callback) 
{
    const connection = mysql.createConnection(
        {
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'bschool'    
        }
    );

    connection.connect();

    connection.query( query, function(err, rows, fields) 
    {
        if (err)
        {
            console.log('Error while performing Query.' + err.stack);
            callback(err);
        }
        else
        {
            console.log('The solution is: ', rows);
            callback(null, rows);
        }
            
    });

    connection.end();
}

module.exports.runQuery = runQuery;