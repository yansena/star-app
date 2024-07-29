import { Planet } from "app/models/Planets";
import axios from "axios";

export const fetchHomeWorld = async ({
  url,
}: {
  url: string;
}): Promise<Planet> => {
  const response = await axios.get(`${url}`);
  return response.data;
};
