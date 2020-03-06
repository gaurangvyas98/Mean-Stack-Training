const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res) {
    //getting data from input tag using name attribute
    // console.log(req.body.cityName);

    const query = req.body.cityName;
    const apikey = "34fa91b2efa4fd7a4d3136100eba749d";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apikey +"&units="+ unit ;

    //http get request
    https.get(url,function(response) {
        // console.log(response.statusCode);

        response.on("data",function(data) {
            //changing data to json format
            const weatherData = JSON.parse(data);
            //getting temperature form javascript objects
            const temp = weatherData.main.temp;
            //getting weatherdescription from javascript objects
            //just copypaste the path from the browser by clicking on the object
            const weatherDesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = "http://openweathermap.org/img/wn/"+icon +"@2x.png" 
            console.log(temp);
            console.log(weatherDesc);
            // console.log(weatherData);
            // const obj = {
            //     name: 'gaurang',
            //     favcolor: 'cyan'
            // }
            // console.log(JSON.stringify(obj))

            //we can only have one res.send() method in app.get() method but we can have multiple res.write() method 
            res.write("<p> The weather desc : " + weatherDesc + " </p>");
            res.write("<h1>The temperature in " + query + " is : " + temp + "degree celcius </h1>");
            res.write("<img src=" + imageUrl +">");
            res.send();
        })
        
    })
})

   

app.listen(3000,function() {
    console.log("Server up and running at 3000");
});

//JSON.stringify(data) == converts data into string format for example :- var wardrobe = {
//     door:2;
//     drawers:2
//     color:"red";
// }  ============to=========== this format "{doors:2,drawers:2,color:red}"
