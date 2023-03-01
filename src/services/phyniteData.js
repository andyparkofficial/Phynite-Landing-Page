import http from "../http-common";

class PhyniteDataService {
 

  addEmail(email) {
    return http.post("/addEmail", {email: email});
  }

}

export default new PhyniteDataService();
