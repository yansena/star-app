import { Actor } from "app/models/Actor";
import useActorsStore from "../store/actors";
import { fetchActors, fetchSelectedActor } from "../services/actorsService";
import {
  useInfiniteQuery,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { ActorsReturnProps } from "app/models/ActorsReturn";
import { AxiosError } from "axios";
import { useEffect } from "react";

export const useActorsViewModel = () => {
  const addActors = useActorsStore((state) => state.addActors);

  const {
    status,
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
  } = useInfiniteQuery<ActorsReturnProps, AxiosError>({
    queryKey: ["actors"],
    queryFn: ({ pageParam = 1 }) => fetchActors(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const nextPageUrl = new URL(lastPage.next);
      return nextPageUrl.searchParams.get("page");
    },
  });

  const onActorPress = (actor: Actor) => {
    useActorsStore.setState({ selectedActor: actor });
  };

  useEffect(() => {
    if (data) {
      const newActors = data.pages.flatMap((page) => page.results);
      addActors(newActors);
    }
  }, [data, addActors]);

  return {
    status,
    error,
    isFetching,
    isLoading,
    onActorPress,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export const useSelectedActorViewModel = (id: number) => {
  const setSelectedActor = useActorsStore((state) => state.setSelectedActor);

  const { data, error, isLoading } = useQuery<Actor, AxiosError>({
    queryKey: ["selectedActor", id],
    queryFn: () => fetchSelectedActor({ id }),
    enabled: !!id,
  });

  useEffect(() => {
    if (data) {
      setSelectedActor(data);
    }
  }, [data, setSelectedActor]);

  return {
    actor: data,
    error,
    isLoading,
  };
};
