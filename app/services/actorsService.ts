import { ActorsReturnProps } from "app/models/ActorsReturn";
import { Actor } from "../models/Actor";
import { api } from "./api";

export const fetchActors = async (
  pageParam: number | unknown
): Promise<ActorsReturnProps> => {
  const response = await api.get(`/people?page=${pageParam}`);
  return response.data;
};

export const fetchSelectedActor = async ({
  id,
}: {
  id: number;
}): Promise<Actor> => {
  const response = await api.get(`/people/${id}`);
  return response.data;
};
