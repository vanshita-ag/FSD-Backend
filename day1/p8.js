const fs = require('fs');
fs.unlink("./data.txt",(err)=>{
    if(err)
        console.log("Err", err)
    console.log("File Deleted successfully");
})