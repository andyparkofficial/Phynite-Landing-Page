import http from "../http-common";

class PhyniteDataService {
 

  addEmail(email) {
    return http.post("/addEmail", {email: email});
  }

  getBlogs(blogName) {
    return http.get(`/getBlogs?blogName=${blogName}`)
  }

}

export default new PhyniteDataService();
