import { useActorFilmsViewModel } from "../../../viewmodel/actorsFilmsViewModel";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";
import { ActorFilmContent, Title } from './style'
import { PaperDivider } from "../ActorsDetail/styles";
import { ActorFilmItem } from "app/components/molecules/ActorFilmItem";

export function ActorFilms({ urls }: { urls: string[] }) {
  const { data, pending } = useActorFilmsViewModel(urls)

  return (
    <ActorFilmContent>
      <Title>
        And appers on this films
      </Title>
      <PaperDivider />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ActorFilmItem film={item} />
        )}
      />
    </ActorFilmContent>
  )
}