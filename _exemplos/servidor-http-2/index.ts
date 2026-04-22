const srv = Bun.serve({
  port: 8080,
  routes: {
    "/hello": () => new Response("Hello, World! DUNHA 2!"),
    "/teste": () => new Response(`<h1>Teste</h1><p>Olá, mundo!</p>`, 
{ headers: { "Content-Type": "text/html" } }),
  },
  fetch(request) {
    return new Response("Hello, World!")
  }
})

console.log(`Server rodando em http://localhost:${srv.port}`)