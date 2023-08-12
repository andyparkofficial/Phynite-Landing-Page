import axios from "axios";
axios.defaults.withCredentials = false;
// if false, cross-site requests cannot include cookies or authorization headers

export default axios.create({
  baseURL: "https://www.phynite.io/api/v1",
  headers: {
    "Content-type": "application/json",
  },
  timemout: 2500,
});
