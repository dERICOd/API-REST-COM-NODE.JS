// 29-30 COPIAR COMANDOS
// 30
import fastify from "fastify";
const app = fastify();

// GET, POST, PUT, PATCH, DELETE
// http://localhost:3333/hello

app.get("/hello", () => {
  return "hello world";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
