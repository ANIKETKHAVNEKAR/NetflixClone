var exp = require('express')
var app = exp()

// app.get('/login',function(req,res){
// 	console.log(__dirname);
// 	res.sendFile(__dirname + "/loginform.html");

// })
// app.get('/logincheck',function(req,res){
// 	//req.query - gives the values in the query string
// 	if(req.query.uid == "bakul" && req.query.pwd == "bakul123")
// 	    res.send("Login success");
// 	else
// 	    res.send("Login failed"); 
// })

app.get("/home",function(req,res){
	res.sendFile(__dirname + "/loginform.html");

})
app.get("/logincheck",function(req,res){
	if(req.query.name== "aniket" && req.query.pwd== "1011"){
		res.send("loginSuccess");
	}else {
		res.send("loginFailure");
	}
	
})


app.all('*',function(req,res){
res.send("<p>Invalid</p>")
})

app.listen(9000,function()
{console.log("server Started")})