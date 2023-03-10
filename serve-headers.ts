import Server from "https:/deno.land/x/lume/core/server.ts";
import csp from "https://raw.githubusercontent.com/lumeland/experimental-plugins/main/csp/mod.ts";

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_dist`,
});

// Use the middleware and pass your preferred options:
server.use(csp({
  "Strict-Transport-Security": {
	maxAge: 63072000,
	includeSubDomains: true,
	preload: true,
  },
  "Referrer-Policy": ["no-referrer", "strict-origin-when-cross-origin"],
  "X-Frame-Options": true,
  "X-Content-Type-Options": true,
  "X-XSS-Protection": true,
  "X-Permitted-Cross-Domain-Policies": true,
  "X-Powered-By": false,
}),

server.start(),

console.log("Listening on http://localhost:8000"))