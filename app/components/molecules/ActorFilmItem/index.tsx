import { Film } from "app/models/Films";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { FilmTitle, FilmEpisode, FilmItemContent } from './style';

export function ActorFilmItem({ film }: { film: Film | undefined }) {

  if (!film) {
    return <Text>Actor don't has films</Text>
  }

  return (
    <FilmItemContent>
      <FilmTitle>{film.title} - </FilmTitle>
      <FilmEpisode>Episode: {film.episode_id}</FilmEpisode>
    </FilmItemContent>
  )
}