const server = Bun.serve({
  routes: {},
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;
    const localPath = (pathname === "/") 
      ? `./public/index.html`
      : `./public${pathname}`;
    const file = Bun.file(localPath);
    const exists = await file.exists();
    if (!exists)
      return new Response("Not Found", { status: 404 });
    return new Response(file);
  },
});
console.log(`Server running at ${server.url}`);