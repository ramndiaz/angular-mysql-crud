"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newsController_1 = __importDefault(require("../controllers/newsController"));
class NewsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', newsController_1.default.list);
        this.router.get('/:id', newsController_1.default.getOne);
        this.router.post('/', newsController_1.default.create);
        this.router.delete('/:id', newsController_1.default.delete);
        this.router.put('/:id', newsController_1.default.update);
    }
}
const newsRoutes = new NewsRoutes();
exports.default = newsRoutes.router;
