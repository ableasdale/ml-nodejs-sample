var marklogic = require("marklogic");
var conn = require("../env.js").connection;

var db = marklogic.createDatabaseClient(conn);
var q = marklogic.queryBuilder;

db.documents.query(
  q.where(
    q.byExample(
      {
        gender: "male",
        age: { $gt: 25 },
        tags: ["ex"],
        $filtered: true
      }   
    )
  )
)
.stream().
  on("data", function(document) {
    console.log(document);
  }).
  on("error", function(error) {
    console.error(error)
  });
