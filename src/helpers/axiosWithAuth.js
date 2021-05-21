import axios from "axios";

//Build and export a function used to send in our authorization token
export const axiosWithAuth = () => {
    return axios.create({
        headers: {
            Authorization: window.localStorage.getItem("token")
        },

        baseURL: "http://localhost:5000/api"
    });
};

//Task List:
//Build and export a function used to send in our authorization token
