import { useQuery } from "@tanstack/react-query";
import { fetchActors } from "../services/actorsService";
import useActorsStore from "../store/actors";
import { Actor } from "app/models/Actor";
import { AxiosError } from "axios";

export const useActorsViewModel = () => {
  const { isLoading, error, actors, selectedActor } = useActorsStore();

  useQuery<Actor[], AxiosError, Actor[], string>("actors", fetchActors, {
    // Tipagem completa
    onSuccess: (data) => useActorsStore.setState({ actors: data }),
    onError: (err) => useActorsStore.setState({ error: err.message }),
  });

  const onActorPress = (actor: Actor) => {
    useActorsStore.setState({ selectedActor: actor });
  };

  return { isLoading, error, actors, selectedActor, onActorPress };
};
