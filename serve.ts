import Server from "https:/deno.land/x/lume/core/server.ts";
import expires from "https:/deno.land/x/lume/middlewares/expires.ts";
import notFound from "https:/deno.land/x/lume/middlewares/not_found.ts";
import www from "https://deno.land/x/lume/middlewares/www.ts"

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_dist`,
});

server.use(expires());
server.use(notFound({
    root: `${Deno.cwd()}/_dist`,
    page404: "/en/404/index.html",
  }));
server.use(www({
  add: false, // false to remove, true to add it.
}));
server.start();

console.log("Listening on http://localhost:8000");