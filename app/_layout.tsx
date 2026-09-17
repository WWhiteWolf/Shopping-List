import 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { AppOrientationProvider } from '../components/AppOrientation';
import { CoverRoot } from '../components/Cover';
import { ThemeProvider, useThemeControls } from '../constants/Themes';

const PAGE = { headerShown: false, gestureEnabled: false, fullScreenGestureEnabled: false } as const;

function RootHousing() {
  const { preferencesReady } = useThemeControls();
  if (!preferencesReady) return null;

  return (
    <CoverRoot>
      <Stack screenOptions={{ orientation: 'default', gestureEnabled: false, fullScreenGestureEnabled: false }}>
        <Stack.Screen name="index" options={PAGE} />
        <Stack.Screen name="shopping" options={PAGE} />
      </Stack>
    </CoverRoot>
  );
}

export default function RootLayout() {
  return (
    <AppOrientationProvider>
      <ThemeProvider>
        <RootHousing />
      </ThemeProvider>
    </AppOrientationProvider>
  );
}
