var marklogic = require("marklogic");
var conn = require("../env.js").connection;

var db = marklogic.createDatabaseClient(conn);
db.documents.read("/6e1c7304-09a1-4436-ba77-ae1e3b8856f7.json", "/dd95907c-3b29-4e2c-9a4c-baf61bd96c9d.json")
  .result(function(documents) {
    console.log('read:\n'+
      documents.
      map(function(document){
        return '    ' + document.content.name + ' at ' + document.uri
      }).join('\n')
    )
  }, function(error) {
    console.dir(error)
  });
