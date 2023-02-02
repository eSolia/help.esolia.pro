import Server from "https:/deno.land/x/lume/core/server.ts";

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_dist`,
});

server.start();

console.log("Listening on http://localhost:8000");