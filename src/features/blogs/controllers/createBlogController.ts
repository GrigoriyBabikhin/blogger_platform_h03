import {Request, Response} from "express";
import {BlogInputModel, BlogViewModel} from "../../../input-output-types/blogs-types";
import {blogsRepository} from "../blogsMongoRepository";

export const createBlogController = async (
    req: Request<any, any, BlogInputModel>,//BlogInputModel данные в теле запроса
    res: Response<BlogViewModel> //BlogViewModel данные в теле ответа
) => {
    const newBlog  = await blogsRepository.create(req.body)
    res.status(201).json(newBlog)
}