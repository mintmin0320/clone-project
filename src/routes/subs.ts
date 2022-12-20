const bcrypt = require('bcryptjs');
import { Request, Response, Router } from 'express';
import { isEmpty, validate } from "class-validator";
import { User } from '../entities/User';
const cookie = require('cookie');
const jwt = require('jsonwebtoken');
import userMiddleware from "../middlewares/user"
import authMiddleware from "../middlewares/auth"

const createSub = async (req: Request, res: Response, next) => {
  const { name, title, description } = req.body;
}


const router = Router();

router.post("/", userMiddleware, authMiddleware, createSub);

export default router;