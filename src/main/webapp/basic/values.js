var marklogic = require("marklogic");
var conn = require("../env.js").connection;

var vb = marklogic.valuesBuilder;

var db = marklogic.createDatabaseClient(conn);
db.values.read(
    // Requires an element range index on eyeColor
    // Without one you'll get an XDMP-ELEMRIDXNOTFOUND error.
    vb.fromIndexes('eyeColor')
        .where(
            // Also requires a range index on age
            vb.range('age', '>', 20)
        )
        // Only get the first one
        .slice(1, 1)
    )
    .result(
        function(r) {
            var tuple = r['values-response'].tuple[0];
            console.log('Eye color "' + tuple['distinct-value'][0] + '"' + " occurs " + tuple.frequency + " times.");
        },
        function(error) { console.error(error) }
    );