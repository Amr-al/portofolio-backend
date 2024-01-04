import { createConnection } from "typeorm";
import { Projects } from "../entities/project";
import { Skills } from "../entities/skills";
exports.conf = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "snuffleupagus.db.elephantsql.com",
      port: 5432,
      database: "rsrpibwi",
      password: "4Y5KrcjzrFDPJmroYNPFvAA6h2h_jg-w",
      username: "rsrpibwi",
      entities:[Projects,Skills],
      synchronize: true,
    });
    console.log("connected to POSTGRES");
  } catch (e) {
    console.log(e);
  }
};
