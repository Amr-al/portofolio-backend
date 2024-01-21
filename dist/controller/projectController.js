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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProject = exports.getProjectById = exports.getProjects = void 0;
const project_1 = require("../entities/project");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
exports.getProjects = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield project_1.Projects.find();
    return res.status(200).json(result);
}));
exports.getProjectById = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = parseInt(req.params.id);
    let result = yield project_1.Projects.findOneBy({ id: id });
    return res.status(200).json(result);
}));
exports.addProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { description, tools, github, link, demo, name } = req.body;
    let images = [];
    for (let i = 0; i < req.files.length; ++i) {
        images.push(req.files[i].path);
    }
    const result = yield project_1.Projects.create({
        description,
        tools: JSON.parse(tools),
        mainImage: (_a = req.files[0]) === null || _a === void 0 ? void 0 : _a.path,
        image: images,
        github: github,
        link: link,
        demo: demo,
        name: name,
    }).save();
    return res.status(200).json(result);
}));
