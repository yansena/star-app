import { useQueries, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { fetchFilms } from "../services/filmsService";
import { Film } from "app/models/Films";

export const useActorFilmsViewModel = (urls: string[]) => {
  const combinedResult = useQueries({
    queries: urls.map((url) => ({
      queryKey: ["actorFilms", url],
      queryFn: () => fetchFilms(url),
      staleTime: Infinity,
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });

  return combinedResult;
};

//<Film[], AxiosError>
