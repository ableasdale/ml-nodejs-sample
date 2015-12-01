var marklogic = require("marklogic");
var conn = require("../env.js").connection;

var db = marklogic.createDatabaseClient(conn);
var q = marklogic.queryBuilder;

// This would likely come from a text box in the UI
var queryString = "sex:female bio:ennui"
db.documents.query(
    q.where(
        q.parsedFrom(queryString,
            q.parseBindings(
                // Binds the "bio" keyword to the "about" property in the JSON.
                // Compare this to the q.word() in the "Query Builder" example above.
                q.word('about', q.bind('bio')),
                q.value('gender', q.bind('sex'))
            )
        )
    )
    )
    .result(function(documents) {
        documents.forEach(function(document) {
            console.log(document.content.name + " at " + document.uri)
        })
    }, function(error) {
        console.dir(error);
    });