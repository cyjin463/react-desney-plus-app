import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.thsmoviedb.org/3",
    params: {
        api_key: "3f54274ab421b484dafd94eab80570fd",
        language: "ko-KR",
    },
});

export default instance;
