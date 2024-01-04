"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conf = void 0;
const typeorm_1 = require("typeorm");
const project_js_1 = require("../entities/project.js");
const skills_js_1 = require("../entities/skills.js");
const conf = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, typeorm_1.createConnection)({
            type: "postgres",
            host: process.env.host,
            port: 5432,
            database: process.env.database,
            password: "4Y5KrcjzrFDPJmroYNPFvAA6h2h_jg-w",
            username: process.env.name,
            entities: [project_js_1.Projects, skills_js_1.Skills],
            synchronize: true,
        });
        console.log("connected to POSTGRES");
    }
    catch (e) {
        console.log(e);
    }
});
exports.conf = conf;
