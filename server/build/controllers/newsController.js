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
const database_1 = __importDefault(require("../database"));
class NewsController {
    list(req, res) {
        const news = database_1.default.query('SELECT * FROM news');
        res.json(news);
    }
    //public async list (req: Request, res: Response) {
    //    await pool.query('SELECT * FROM news', function(err, result, fields) {
    //        if (err) throw err;
    //        res.json(result);
    //    });
    //}
    getOne(req, res) {
        res.json({ text: 'this is a news number ' + req.params.id });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('INSERT INTO news set ?', [req.body]);
            res.json({ message: 'news saved' });
        });
    }
    //public async create (req: Request, res: Response) {
    //    await pool.query('SELECT * FROM news', function(err, result, fields) {
    //        if (err) throw err;
    //        res.json(result);
    //    });
    //}
    delete(req, res) {
        res.json({ text: 'deleting a news = ' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'uptating a news = ' + req.params.id });
    }
}
const newsController = new NewsController();
exports.default = newsController;
