import { Redirect, Stack } from 'expo-router';

import { useSession } from '../ctx';
import { Text } from 'react-native';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  )
}
