var module=require("./filelist.js");
module(process.argv[2],process.argv[3],function(err,list){
if(err) return console.log("error",err);
list.forEach(function(v){
    console.log(v)
})
})