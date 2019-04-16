//importing libraries
var express = require('express');
var data = require('../src/assets/Data/data.json')
var parser = require('body-parser');
var fs = require('fs');
var cors = require('cors');
var exp = express();
exp.use(cors());
//Declaring Vaiables
var appendData = data;
var _getUrl = '/rest/api/get-movies';
var _url1 = '/rest/api/post-movies';
var _url2 = '/rest/api/update-movies';
var _url3 = '/rest/api/delete-movies/:id';

exp.route(_getUrl).get((req,res)=>{
    console.log("Get Url invoked");
    res.send(data);
});

exp.use(parser.json());
exp.route(_url1).post((req,res)=>{
    console.log("Add Url invoked")
    var Obj = req.body;
    var lastId = appendData[appendData.length-1].id
    Obj.id=lastId+1;
    appendData.push(Obj);
    res.send(appendData);
    fs.writeFileSync('../src/assets/Data/data.json',JSON.stringify(appendData));
    }
);

exp.route(_url2).put((req,res)=>{
    console.log("Update Url invoked")
   // res.writeHead(200, {'Content-Type': 'text/json'});
    for(var prod  of data) {
        if(prod.id==req.body.id){
            prod.title = req.body.title;
            prod.director = req.body.director;
            prod.description = req.body.description;
            prod.starRating = req.body.starRating;
            prod.tags = req.body.tags;
            prod.category = req.body.category;
        }
        fs.writeFileSync('../src/assets/Data/data.json',JSON.stringify(data));
    }
    res.send(data);
});

exp.route(_url3).delete((req,res)=>{
    console.log("Delete Url invoked");
    for(var e in data){
        if(data[e].id==req.params.id){
            data.splice(e,1);
        }
        
        fs.writeFileSync('../src/assets/Data/data.json',JSON.stringify(data));
    }
    res.send(data);
});

exp.listen(3001,()=>console.log("Running"));

