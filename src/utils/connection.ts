import { createConnection } from "typeorm";
import { Projects } from "../entities/project.js";
import { Skills } from "../entities/skills.js";
export const conf = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: process.env.host,
      port: 5432,
      database: process.env.database,
      password: "4Y5KrcjzrFDPJmroYNPFvAA6h2h_jg-w",
      username: process.env.name,
      entities:[Projects,Skills],
      synchronize: true,
    });
    console.log("connected to POSTGRES");
  } catch (e) {
    console.log(e);
  }
};
