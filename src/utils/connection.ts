import { createConnection } from "typeorm";
import { Projects } from "../entities/project";
import { Skills } from "../entities/skills";
import {Message} from '../entities/message';
export const conf = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: process.env.host,
      port: 5432,
      database: process.env.database,
      password: "4Y5KrcjzrFDPJmroYNPFvAA6h2h_jg-w",
      username: process.env.name,
      entities:[Projects,Skills,Message],
      synchronize: true,
    });
    console.log("connected to POSTGRES");
  } catch (e) {
    console.log(e);
  }
};
