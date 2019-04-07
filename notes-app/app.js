const fs=require('fs');
//file into a write
//fs.writeFileSync('notes.txt','this file was created by Rafa');
//add to the file the comment I live on CR
fs.appendFileSync('notes.txt',' I live on CR');