const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

//to display static data like images and css file we have to declare a static folder
// we have to assume we are inside public folder to give path
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.emailaddress;

    //javascript object
    const data = { //object
        members: [ //array
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstname,
                    LNAME: lastname
                }
            }
        ]
    };
    // converting javascript object to JSON string
    const jsonData = JSON.stringify(data);

    // endpoint to mailchimp server https://usX.api.mailchimp.com/3.0/lists  usX === here X has to be replaced with the no. in API key
    // now we have to add POST /lists/{list_id} at the end of the endpoint   in place of {list_id} we have to replace our own list id

    const url = "https://us19.api.mailchimp.com/3.0/lists/232d09ec8b"; //api key 3182701fac74801c497a4a052cccf112-us19 replace number after us in the url

    const options = {
        method : "POST",
        auth : "gaurang1:8fb1a517050a2cfb59276a1b59d335b7-us19" //any name : apikey
    }

    const request = https.request(url, options, function(response) {

        if(response.statusCode === 200)
        {
            res.sendFile(__dirname + "/success.html");
        }
        else
        {
            res.sendFile(__dirname + "/failure.html");
        }
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        }
        )
    });

    request.write(jsonData);
    request.end();
})

app.post("/failure", function(req,res) {
    res.redirect("/");
})
// TO RUN APPLICATION ON HEROKU AS WELL AS LOCALLY ON PORT 3000
app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running at the port 3000");
})



// api key 8fb1a517050a2cfb59276a1b59d335b7-us19
// list id 232d09ec8b