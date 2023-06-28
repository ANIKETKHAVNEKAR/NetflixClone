
var exp = require('express');
var app = exp();
var bp = require('body-parser');

app.use(bp.urlencoded({ extended: false }))


app.get("/login",function(req,res){
	res.sendFile( __dirname + "/getform.html");
})

app.post('/getDataTable', function(req,res){
    	var str ="";
        str +="<table border=1>"
        str +="<tr>"
        str +="<td>" + req.body.name+"</td>" 
		str +="<td>" + req.body.birdate+"</td>" 
		str +="<td>" + req.body.email+"</td>" 
		str +="<td>" + req.body.qual+"</td>" 
       str +="</tr>";
     str+="</table>"  

    res.send(str);

});

app.all('*',function(req,res){
	res.send("<p>Invalid url </p>")
	})

		
app.listen(9000,function()
{console.log("server Started at port 9000")})


