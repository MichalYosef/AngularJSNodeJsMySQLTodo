var dal = require("./dal");
// var models = require('./models');


function getAllFromTable(tableName, callback) {
    dal.executeQuery('SELECT * FROM `' + tableName + '`', function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null, rows);
    });
}


module.exports.sql = {
    getAllFromTable: getAllFromTable
};


