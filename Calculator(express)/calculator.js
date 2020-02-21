const express = require("Express");
const bodyParser = require("body-parser");

const app = express();

//urlencoded for form data, we can use json() also, or text() also
app.use(bodyParser.urlencoded({extended : true}));
//to use body parse we have to write the above code always

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
    // __dirname displays the current directory in any pc 
});

app.post("/",function(req,res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    //n1 and n2 comes from name attribute

    var result = num1 + num2;
    
    res.send("The result of the calculation is : " + result);
});

//BMI CALCULATOR
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    // weight and height comes from name attribute in input form
    
    var bmi = weight/ (height * height);
    
    res.send("Your bmi is : " + bmi);
});

app.listen(3000, function(){
    console.log("server is running on the port 3000");
});