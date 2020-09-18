import { api } from "./AxiosService";

class BlogsService {
  async getAllBlogs() {
    let res = await api.get("blogs");
    return res.data;
  }

  async getActiveBlog(blogId) {
    console.log("service", blogId);
    let res = await api.get("blogs/" + blogId);
    console.log(res);
    return res.data;
  }
  async getCommentsByBlog(blogId) {
    let res = await api.get("blogs/" + blogId + "/comments");
    return res.data;
  }

  async editBlog(blogId) {
    let res = await api.put("blogs" + blogId);
    return res.data;
  }

  async createBlog(blogInputs) {
    let res = await api.post("blogs", blogInputs);
    return res.data;
  }

  async deleteBlog() {
    let res = await api.delete("blogs/:blogId");
    return res.data;
  }
}

export const blogsService = new BlogsService();
