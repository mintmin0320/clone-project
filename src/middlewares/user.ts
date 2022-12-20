import { NextFunction, Request, Response } from 'express';
const jwt = require('jsonwebtoken');
import { User } from '../entities/User';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) return next();

    const { username }: any = jwt.verify(token, process.env.JWT_SECRET); //유저네임 알아내기
    const user = await User.findOneBy({ username });
    if (!user) throw new Error("Unauthenticated");

    // 유저정보를 res.local.user에 넣어주기
    res.locals.user = user;
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Something went wrong" })
  }
}