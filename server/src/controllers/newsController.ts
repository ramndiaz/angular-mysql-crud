import {Request, Response } from 'express';
import pool from '../database';

class NewsController {

    //public list (req: Request, res: Response){
    //    const news = pool.query('SELECT * FROM news');
    //    res.json(news);
    //}
    public async list (req: Request, res: Response) {
        pool.query('SELECT * FROM news', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public getOne(req: Request, res: Response){
        res.json({text: 'this is a news number '+ req.params.id});
    }
    public async create(req: Request, res: Response){
        pool.query('INSERT INTO news set ?', [req.body]);
        res.json({message: 'news saved'});
    }
    //public async create (req: Request, res: Response) {
    //    await pool.query('SELECT * FROM news', function(err, result, fields) {
    //        if (err) throw err;
    //        res.json(result);
    //    });
    //}
    public delete(req: Request, res: Response){
        res.json({text: 'deleting a news = '+ req.params.id});
    }
    public update(req: Request, res: Response){
        res.json({text: 'uptating a news = ' + req.params.id});
    }
}

const newsController = new NewsController();
export default newsController;