// //set cookiie and reading 

// const express = require('express');
// const app = express();
// const cookieParser = require('cookie-parser'); // Corrected import

// app.use(cookieParser()); // Middleware to parse cookies

// // Route to set a cookie
// app.get('/', function (req, res) {
//     res.cookie("name", "simrandhiman"); // Set a cookie with key "name" and value "simrandhiman"
//     res.send("Cookie has been set");
// });

// //read -req
// //set= res


// // Route to read cookies
// app.get('/read', function (req, res) {
//     console.log(req.cookies); // Logs all cookies sent by the client
//     res.send("Cookies are logged in the console");
// });


// app.listen(3000);


// //bcrypt use karte hai password to encrypt
// const express = require('express');
// const app = express();
// const bcrypt=require('bcrypt');

// app.get('/', function (req, res) {
//     bcrypt.genSalt(10, function(err, salt) {
//         // console.log(salt) //random string
//         bcrypt.hash("polololololo", salt, function(err, hash) {
//             // Store hash in your password DB.
//             console.log(hash);
//         });
//     });

//     res.send("I'm home page")
    
// });

// app.listen(3000);




// decrypt
// const express = require('express');
// const app = express();
// const bcrypt=require('bcrypt');

// app.get('/', function (req, res) {
//     bcrypt.compare("polololololo", "$2b$10$Q5fdDR2Sqg2NVS4WQMP9vuel/2fYb1ef.2RSRAsEC4TgPfCjJuO2.", function(err, result) {
//         // result == true
//         console.log(result);
//     });
    
//     res.send("I'm home page")
    
// });

// app.listen(3000);


//JWT 
const express = require('express');
const app = express();
const cookieParser=require('cookie-parser');
const jwt=require('jsonwebtoken');

app.use(cookieParser());

app.get('/', function (req, res) {
    let token=jwt.sign({email:"simran@example.com"},"secret");
    res.cookie("token",token);
    // console.log(token);
    res.send("check token string");  
});

app.get("/read",function(req,res){
    // console.log(req.cookies.token);
    let data=jwt.verify(req.cookies.token,"secret");
    console.log(data);
    res.send("I'm read ")
})

app.listen(3000);
