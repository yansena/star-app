import { Actor } from "../models/Actor";
import { create } from "zustand";

interface ActorsState {
  actors: Actor[];
  selectedActor: Actor | null;
  setActors: (actors: Actor[]) => void;
  addActors: (newActors: Actor[]) => void;
  addFavorite: (actorName: string) => void;
  setSelectedActor: (actor: Actor) => void;
}

const useActorsStore = create<ActorsState>((set) => ({
  actors: [],
  selectedActor: null,
  favoritesActors: [],
  setActors: (actors) => set({ actors }),
  addActors: (newActors) =>
    set((state) => {
      const uniqueActors = newActors.filter(
        (newActor) => !state.actors.some((actor) => actor.id === newActor.id)
      );
      return { actors: [...state.actors, ...uniqueActors] };
    }),
  addFavorite: (actorName) =>
    set((state) => ({
      actors: state.actors.map((actor) =>
        actor.name === actorName
          ? { ...actor, favorite: !actor.favorite }
          : actor
      ),
    })),
  setSelectedActor: (actor) => set({ selectedActor: actor }),
}));

export default useActorsStore;
