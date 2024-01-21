console.log("hello world");

const {readFile , writeFile} = require("fs");

const reading = readFile("./src_modules/file1.txt","utf8",(error , result)=>{
    try{
        if (error){
            throw error;
        }
        console.log(`the result is ${result}`)    
    }
    catch(error){
        console.log(`error found :${error.messsage}`)
    }
})
reading.then(
    writeFile("./src_modules/file1.txt","utf8",result ,(error,resolve)=>{
        try{if(error){
            throw error;
        }
        console.log(resolve);
    }
    catch(error){
       console.log(error) 
    }
    }
))
// console.log("this is reading value " + reading);