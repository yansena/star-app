
import { AxiosError } from 'axios';
import { Planet } from 'app/models/Planets';
import { useQuery } from '@tanstack/react-query';
import { fetchHomeWorld } from 'app/services/planetsServices';

import { Container, HomeTitle } from './style'
import { ActivityIndicator } from 'react-native-paper';


export function ActorsHome({ url }: { url: string }) {
  const { data, error, isLoading } = useQuery<Planet, AxiosError>({
    queryKey: ["fetchHome",],
    queryFn: () => fetchHomeWorld({ url }),
  });


  if (isLoading) return <ActivityIndicator size='small' />

  return (
    <Container>
      <HomeTitle>
        {data?.name}
      </HomeTitle>
    </Container>
  )
}