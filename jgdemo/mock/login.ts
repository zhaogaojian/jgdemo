import { Request, Response } from 'express';
export default {
    'POST /api/login': (req: Request, res: Response) => {
        res.send({ status: 'ok', token: '121131323' });
      },
  };
  