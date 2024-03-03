import axios from "axios";

const baseUrl = "api/users/login";

const login = async (credentials) => {
  try {
    const res = await axios.post(baseUrl, credentials);
    console.log(res);
    return res.data;
  } catch (e) {
    console.error("Axios Error:", e);
    if (e.config) {
      console.log("Axios Request Config:", e.config);
      console.log("Request Method:", e.config.method);
      console.log("Request URL:", e.config.url);
      console.log("Request Headers:", e.config.headers);
      console.log("Request Data:", e.config.data);
    }
  }
};

export default login;
