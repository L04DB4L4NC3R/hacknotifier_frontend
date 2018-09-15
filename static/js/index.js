const request = require("request");


request.get("http://hacknotifier.herokuapp.com/",(err,response,body)=>{
    console.log(body);
});