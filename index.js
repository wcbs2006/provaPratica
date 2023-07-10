const http = require('http')
const os = require('os')
const url = require('url')
const PORT = 3000

// ATIVIDADE 01
// const server = http.createServer((req,res)=>{
//     if(req.url === '/info'){
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'application/json')
//         const objeto = [
//             { type: 'Sistema operacional', action: os.type(server)},
//             { type: 'Memória disponível', action: os.freemem(server)},
//             { type: 'Diretório atual', action: os.homedir(server)}
//         ]
//         const json = JSON.stringify(objeto)
//         res.write(json)
//         res.end()
//     }else{
//         res.writeHead(404, 'Content-Type', 'text/plan')
//         res.write('Página não encontrada!')
//     }
// })

// ATIVIDADE 03 (Tinha que usar o módulo Path se eu queria que fosse a Atividade 02!!!)
const server = http.createServer((req, res)=>{
    const myUrl = url.parse('https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf')
    console.log(myUrl)
})

server.listen(PORT, ()=>{
    console.log(`Online: ${PORT}`)
})