import axios from "axios";

export default axios.create({
  baseURL: "https://tea-chain-backend.herokuapp.com/",
  responseType: "json",
});
