import { fetchSelectedActor } from "../services/actorsService"; // Certifique-se de ajustar o caminho da importação
import { useQuery } from "@tanstack/react-query";
import { Actor } from "app/models/Actor";
import useActorsStore from "app/store/actors";
import { AxiosError } from "axios";

export const useSelectedActorViewModel = (id: number) => {
  const { data, error, isLoading } = useQuery<Actor, AxiosError>({
    queryKey: ["selectedActor", id],
    queryFn: () => fetchSelectedActor({ id }),
    enabled: !!id,
  });

  const { actors } = useActorsStore();

  const selectedActor = actors.find((actor) => actor.name === data?.name);

  return {
    actor: selectedActor,
    error,
    isLoading,
  };
};
