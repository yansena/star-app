import { Actor } from "../models/Actor";
import { error } from "./../../node_modules/schema-utils/node_modules/ajv/lib/vocabularies/applicator/dependencies";
import { create } from "zustand";

interface ActorsState {
  actors: Actor[];
  selectedActor: Actor;
  isLoading: boolean;
  error: string | null;
}

const useActorsStore = create<ActorsState>(() => ({
  actors: [] as Actor[],
  selectedActor: {} as Actor,
  isLoading: false,
  error: null,
}));

export default useActorsStore;
