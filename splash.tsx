import { SplashScreen } from "expo-router";
import { useSession } from "~/lib/auth-ctx";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export function SplashScreenController() {
  const { initialized } = useSession();

  if (initialized) {
    SplashScreen.hideAsync();
  }

  return null;
}
