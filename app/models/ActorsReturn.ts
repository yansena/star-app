import { Actor } from "./Actor";

export interface ActorsReturnProps {
  count: number;
  next: string | null;
  previous: number | null;
  results: Actor[];
}
