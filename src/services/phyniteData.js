import http from "../http-common";

class PhyniteDataService {
 

  addSignUp(signUpData) {
    return http.post("/addSignUp", signUpData);
  }

  getBlog(blogName) {
    return http.get(`/getBlogs?blogName=${blogName}`)
  }

  getBlogs() {
    return http.get('/getBlogs')
  }

}

export default new PhyniteDataService();
