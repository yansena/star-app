import { Film } from "app/models/Films";
import { Planet } from "app/models/Planets";
import axios from "axios";

export const fetchFilms = async (url: string): Promise<Film> => {
  const response = await axios.get(`${url}`);
  return response.data;
};
