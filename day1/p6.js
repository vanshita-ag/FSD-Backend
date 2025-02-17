const fs = require('fs')
const write=()=>{

// const data = fs.readFileSync("./data.txt","utf-8")
//console.log(data)
fs.writeFile("./data.txt","utf8",(err)=>{
    if(err)
        console.log("Error Writing File",err)
    else
    console.log("File written Successfully");
})
}
console.log("before write");
write("I am new data");
console.log("after write");