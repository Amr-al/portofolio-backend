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
exports.getSkills = exports.addSkill = void 0;
const skills_1 = require("../entities/skills");
const addSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const result = yield skills_1.Skills.create({
            name: name,
            image: req.file.path
        }).save();
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('something went wrong');
    }
});
exports.addSkill = addSkill;
const getSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield skills_1.Skills.find();
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('something went wrong');
    }
});
exports.getSkills = getSkills;
