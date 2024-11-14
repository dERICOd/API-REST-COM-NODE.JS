import fastify from "fastify"; // 35
import crypto from "node:crypto";
import { knex } from "./database";

const app = fastify();

app.get("/hello", async () => {
  const transaction = await knex("transactions")
    .insert({
      id: crypto.randomUUID(),
      title: "Transação de teste",
      amount: 5000,
    })
    .returning("*");

  return transaction;
});

app.get("/hello1", async () => {
  const transactions = await knex("transactions")
    .where("amount", 1000)
    .select("*");

  return transactions;
});

app.get("/hello2", async () => {
  const transactions = await knex("transactions").select("*");

  return transactions;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
