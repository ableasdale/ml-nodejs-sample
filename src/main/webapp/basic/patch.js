var marklogic = require("marklogic");
var conn = require("../env.js").connection;

var db = marklogic.createDatabaseClient(conn);
var p = marklogic.patchBuilder;

// Exercise for the reader: Loop through and update _all_ of the documents
db.documents.read("/34a23649-ec61-478f-90ab-5f01a55120ce.json")
    .result()
    .then(function(response) {
        var currentBalance = response[0].content.balance;
        if(!currentBalance.value) {
            // Parse the balance (e.g. "$4,321.01") and generate a new object
            var newBalance =  {
                value: parseFloat(currentBalance.replace(/[$,]/g, "")),
                unit: "USD"
            }
            // Return the result promise of the patch
            return db.documents.patch(response[0].uri,
                p.pathLanguage("jsonpath"),
                // Replace the balance property with the new object created above.
                p.replaceInsert('$.balance', '$.balance', 'last-child', newBalance)
            ).result();
        } else {
            console.log("Nothing to update. Balance already parsed.");
            return response[0];
        }
    })
    .then(
        function(response) {
            // The patch returns a response with the URI of the document it just updated.
            // Read that document to verify the patch.
            return db.documents.read(response.uri).result();
        }
    )
    .then(function(response) {
        console.log("Parsed balance: " + JSON.stringify(response[0].content.balance));
    })
    .catch(function(error) {
        console.dir(error);
    })