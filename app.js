//set cookiie and reading 
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); // Corrected import

app.use(cookieParser()); // Middleware to parse cookies

// Route to set a cookie
app.get('/', function (req, res) {
    res.cookie("name", "simrandhiman"); // Set a cookie with key "name" and value "simrandhiman"
    res.send("Cookie has been set");
});

//read -req
//set= res


// Route to read cookies
app.get('/read', function (req, res) {
    console.log(req.cookies); // Logs all cookies sent by the client
    res.send("Cookies are logged in the console");
});

// Start the server
app.listen(3000);
