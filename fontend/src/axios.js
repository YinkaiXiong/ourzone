import axios from "axios";

export const axiosConnect = axios.create({
	baseURL: "http://localhost:8800"
})