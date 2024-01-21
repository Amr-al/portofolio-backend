import { NextFunction, Request, Response } from "express";
import { Skills } from "../entities/skills";
import catchAsync from "../utils/catchAsync";
export const addSkill = catchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const result = await Skills.create({
      name: name,
      image: req.file.path,
    }).save();
    return res.status(200).json(result);
  }
);

export const getSkills = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await Skills.find();
    return res.status(200).json(result);
  }
);
