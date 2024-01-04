import { Request, Response } from "express";
import { Projects } from "../entities/project.js";
import { JsonContains, getRepository } from "typeorm";

export const getProjects = async (req: Request, res: Response) => {
  try {
    let result = await Projects.find();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "something went wrong" });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    let id = parseInt(req.params.id);
    let result = await Projects.findOneBy({ id: id });
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "something went wrong" });
  }
};

export const addProject = async (req: any, res: Response) => {
  try {
    const { description, tools, github, link, demo, name } = req.body;
    let images: string[] = [];
    for (let i = 0; i < req.files.length; ++i) {
      images.push(req.files[i].path);
    }
    const result = await Projects.create({
      description,
      tools: JSON.parse(tools),
      mainImage: req.files[0]?.path,
      image:images,
      github: github,
      link: link,
      demo: demo,
      name:name
    }).save();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "something went wrong" });
  }
};
