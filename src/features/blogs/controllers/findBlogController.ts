import {Request, Response} from "express";
import {BlogViewModel} from "../../../input-output-types/blogs-types";
import {blogsRepository} from "../blogsRepository";

export const findBlogController = async (
    req: Request<{blogId: string}>,
    res: Response<BlogViewModel>
) => {

    let blog:BlogViewModel | undefined = await blogsRepository.findBlogById(req.params.blogId)
    if (!blog) {
        res.status(404).json()
        return
    }
    res.status(200).json(blog)
}