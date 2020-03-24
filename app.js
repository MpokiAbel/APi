var fs = require('fs');


fs.writeFile('./names.txt','How are you',function(err){

    if(!err){
        fs.readFile('./names.txt',function(err,data){
            if(!err){
                console.log(data.toString());
            }
        });


    }

});


