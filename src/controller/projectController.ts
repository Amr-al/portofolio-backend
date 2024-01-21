import { NextFunction, Request, Response } from "express";
import { Projects } from "../entities/project";
import catchAsync from "../utils/catchAsync";
export const getProjects = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let result = await Projects.find();
    return res.status(200).json(result);
  }
);

export const getProjectById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let id = parseInt(req.params.id);
    let result = await Projects.findOneBy({ id: id });
    return res.status(200).json(result);
  }
);

export const addProject = catchAsync(async (req: any, res: Response) => {
  const { description, tools, github, link, demo, name } = req.body;
  let images: string[] = [];
  for (let i = 0; i < req.files.length; ++i) {
    images.push(req.files[i].path);
  }
  const result = await Projects.create({
    description,
    tools: JSON.parse(tools),
    mainImage: req.files[0]?.path,
    image: images,
    github: github,
    link: link,
    demo: demo,
    name: name,
  }).save();
  return res.status(200).json(result);
});
