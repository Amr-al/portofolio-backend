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
exports.addProject = exports.getProjectById = exports.getProjects = void 0;
const project_js_1 = require("../entities/project.js");
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield project_js_1.Projects.find();
        return res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err: "something went wrong" });
    }
});
exports.getProjects = getProjects;
const getProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = parseInt(req.params.id);
        let result = yield project_js_1.Projects.findOneBy({ id: id });
        return res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err: "something went wrong" });
    }
});
exports.getProjectById = getProjectById;
const addProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { description, tools, github, link, demo, name } = req.body;
        let images = [];
        for (let i = 0; i < req.files.length; ++i) {
            images.push(req.files[i].path);
        }
        const result = yield project_js_1.Projects.create({
            description,
            tools: JSON.parse(tools),
            mainImage: (_a = req.files[0]) === null || _a === void 0 ? void 0 : _a.path,
            image: images,
            github: github,
            link: link,
            demo: demo,
            name: name
        }).save();
        return res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err: "something went wrong" });
    }
});
exports.addProject = addProject;
