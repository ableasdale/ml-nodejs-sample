/**
 * Created by ableasdale on 01/12/15.
 */
var marklogic = require("marklogic");
var conn = require("../env.js").connection;

var db = marklogic.createDatabaseClient(conn);
db.documents.removeAll({collection: "fake data"})
    .result()
    .then(function(response) {
        console.log("Removed collection " + response.collection);
    })
    .catch(function(error) {
        console.log(error)
    });