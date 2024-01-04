"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const typeorm_1 = require("typeorm");
let Projects = class Projects extends typeorm_1.BaseEntity {
};
exports.Projects = Projects;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "int",
    }),
    __metadata("design:type", Object)
], Projects.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: true,
    }),
    __metadata("design:type", Object)
], Projects.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: true,
    }),
    __metadata("design:type", Object)
], Projects.prototype, "mainImage", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-array",
        default: [],
        nullable: true,
    }),
    __metadata("design:type", Object)
], Projects.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: true,
    }),
    __metadata("design:type", Object)
], Projects.prototype, "github", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: true,
    }),
    __metadata("design:type", Object)
], Projects.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: true,
    }),
    __metadata("design:type", Object)
], Projects.prototype, "demo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-array",
        default: [],
        nullable: true,
    }),
    __metadata("design:type", Object)
], Projects.prototype, "tools", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-array",
        nullable: true,
    }),
    __metadata("design:type", Object)
], Projects.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Object)
], Projects.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Object)
], Projects.prototype, "updated_at", void 0);
exports.Projects = Projects = __decorate([
    (0, typeorm_1.Entity)("Project")
], Projects);
