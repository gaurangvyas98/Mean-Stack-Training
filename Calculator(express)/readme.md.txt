-Install node
-npm init
-then give your server file (e.g. server.js) as access point
-npm i express
-require express
-npm i nodemon (for automatic reloading of site while saving the data)
-npm i body-parser(to get data from html file, json() for json format data, urlencoded() to get data from form)

-app.get("/",function(req,res){ }); to display information on home page
 res.send("data"); to display data on the site
 res.sendFile(__dirname + "/filename"); to display that file on site

-app.post("/",function(req,res){ });  form method = post, data inside the post method will be displayed
 after clicking the button.