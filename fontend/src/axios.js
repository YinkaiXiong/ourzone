import axios from "axios";

export const axiosConnect = axios.create({
	baseURL: "https://ourzone.onrender.com"
	// baseURL: "http://localhost:8800"

})