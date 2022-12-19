const bcrypt = require('bcryptjs');
import { Request, Response, Router } from 'express';
import { isEmpty, validate } from "class-validator";
import { User } from '../entities/User';
const cookie = require('cookie');
const jwt = require('jsonwebtoken')

const createSub = async (req: Request, res: Response, next) => {
  const { name, title, description } = req.body;

  const token = req.cookies.token;
  if (!token) return next();

  const { username }: any = jwt.verify(token, process.env.JWT_SECRET); //유저네임 알아내기
  const user = await User.findOneBy({ username });
  if (!user) throw new Error("Unauthenticated");
}


const router = Router();

router.post("/", createSub);

export default router;