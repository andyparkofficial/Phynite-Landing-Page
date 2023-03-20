import http from "../http-common";

class PhyniteDataService {
 

  addSignUp(signUpData) {
    return http.post("/addSignUp", signUpData);
  }

  getBlogs(blogName) {
    return http.get(`/getBlogs?blogName=${blogName}`)
  }

}

export default new PhyniteDataService();
