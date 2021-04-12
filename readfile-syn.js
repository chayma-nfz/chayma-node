const fs =require('fs')
console.log('Lecture de fichier sy ...')
fs.readFileSync('hello.txt','utf8',(err,data)=>{



    console.log('contenu du fichier',data)
})
console.log('Fin ')