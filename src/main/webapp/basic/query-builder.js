var marklogic = require("marklogic");
var conn = require("../env.js").connection;

var db = marklogic.createDatabaseClient(conn);
var q = marklogic.queryBuilder;

db.documents.query(
  q.where(
    q.collection("fake data"),
    q.value("gender", "male"),
    q.or(
      q.word("about", "America"),
      q.word("address", "Illinois")
    )
  )
)
.stream().
  on("data", function(document) {
    console.log(document);
  }).
  on("error", function(error) {
    console.log(error)
  });
