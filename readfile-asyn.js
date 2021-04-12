const fs =require('fs')
console.log('Lecture de fichier ...')
fs.readFile('hello.txt','utf8',(err,data)=>{



    console.log('contenu du fichier',data)
})
console.log('Fin ')