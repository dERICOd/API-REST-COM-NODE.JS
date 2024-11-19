import fastify, { FastifyInstance } from "fastify";
import { knex } from "../database";

export async function transactionRoutes(app: FastifyInstance) {
  app.get("/hello1", async () => {
    const transactions = await knex("transactions")
      .where("amount", 1000)
      .select("*");

    return transactions;
  });
}
