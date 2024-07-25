import { Actor } from "../models/Actor";
import { api } from "./api";

export const fetchActors = async (): Promise<Actor[]> => {
  const response = await api.get("/actors");
  return response.data;
};
