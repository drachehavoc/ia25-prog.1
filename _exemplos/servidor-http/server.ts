Bun.serve({
  routes: {
    "/teste": () => new Response(`
      <html>
        <head>
          <title>Cadastro de Pessoa</title>
        </head>
        <body>
          <h1>Cadastro de Pessoa</h1>
          <form action="/pessoa/cadastrar" method="post">
            <label for="nome">Nome:</label><br>
            <input type="text" id="nome" name="nome"><br>
            <label for="dataNasc">Data de Nascimento:</label><br>
            <input type="date" id="dataNasc" name="dataNasc"><br><br>
            <input type="submit" value="Cadastrar">
          </form> 
        </body>
      </html>  
      
    `, { headers: { "Content-Type": "text/html" } }),
  },
  fetch(request) {
    return new Response("Hello World")
  }
})

console.log("Servidor rodando");



// const srv = Bun.serve({
//   port: 8080,
//   routes: {
//     "/": () => new Response("Essa é a home"),
//     "/teste": () => Response.json({ nome: "Daniel", dataNasc: "07/07/1986" }, { status: 200 })
//   },
//   fetch() {
//     return new Response("Rota padrão! 404?");
//   }
// })

// console.log(`Servidor rodando em http://localhost:${srv.port}`);