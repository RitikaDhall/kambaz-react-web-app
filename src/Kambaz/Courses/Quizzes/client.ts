import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const fetchQuizById = async (id: String) => {
  const { data } = await axiosWithCredentials.get(`${QUIZZES_API}/${id}`);
  return data;
};