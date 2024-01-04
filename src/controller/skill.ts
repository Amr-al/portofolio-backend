import { Skills } from "../entities/skills.js";

export const addSkill = async(req:any,res:any)=>{
    try {
        const {name} = req.body;
        const result = await Skills.create({
            name:name,
            image:req.file.path
        }).save()
        return res.status(200).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json('something went wrong')
    }
}

export const getSkills = async(req:any,res:any)=>{
    try {
        const result = await Skills.find();
        return res.status(200).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json('something went wrong')
    }
}