/**
 * Created by ableasdale on 01/12/15.
 */
var dev =  {
    database: "Documents", // Each connection can specify its own database
    host: "localhost",     // The host against which queries will be run
    port: 8000,            // By default port 8000 accepts Client API requests
    user: "q",        // A user with at least the rest-writer role
    password: "q",  // Probably not your password
    authType: "DIGEST"     // The default auth
};

// Another connection. Change the module.exports below to
// use it without having to change consuming code.
var test =  {
    database: "Documents",
    host: "localhost",
    port: 9116,
    user: "q",
    password: "q",
    authType: "DIGEST"
};

module.exports = {
    connection: dev       // Export the development connection
};