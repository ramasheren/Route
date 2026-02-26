import { Op, where } from "sequelize";
import commentModel from "../../DB/models/comment.model.js";
import userModel from "../../DB/models/user.model.js";
import postModel from "../../DB/models/post.model.js";

export const bulkC = async (req, res, next)=>{
    const comments = req.body
    await commentModel.bulkCreate(comments)
    res.status(201).json({msg:"comments created"})
}

export const updateComment = async (req, res, next)=>{
    const {id}= req.params
    const {content, UserId}= req.body
    const comment = await commentModel.findByPk(id)
    if(!comment) return res.status(404).json({msg:"comment not found"})
    if(comment.UserId != UserId) return res.status(403).json({msr:"user not authorized"})
    await comment.update({content})
    res.status(201).json({msr:"comment edited"})
}

export const findCreate = async (req, res, next)=>{
    const {content, UserId, PostId}= req.body
    const comment = await commentModel.findOrCreate({where:{
        content: content,
        UserId: UserId,
        PostId: PostId
    }})
    res.status(200).json({comment})
}

export const search = async (req, res, next)=>{
    const {word}= req.query
    const comments = await commentModel.findAll({
        where:{
            content:{
                [Op.like]:`%${word}%`
            }
        }
    })
    if(!comments) return res.status(404).json({msg:"no comment found"})
    res.status(200).json({comments})
}

export const newest = async (req, res, next)=>{
    const {PostId} = req.params
    const comments = await commentModel.findAll({
        where:{PostId},
        order:[['createdAt','DESC']],
        limit:3
    })
    if(comments.length==0) return res.status(404).json({msg:"no comment found"})
    res.status(200).json({comments})
}

export const details = async (req, res, next)=>{
    const {id} = req.params
    const comment = await commentModel.findByPk(id,{
        include:[
            {model:userModel},
            {model:postModel}
        ]
    })
    if(!comment) return res.status(404).json({msg:"no comment found"})
    res.status(200).json({comment})
}