import { Redirect, Stack } from "expo-router";
import { ThemeToggle } from "~/components/ThemeToggle";
import { useSession } from "~/lib/auth-ctx";

export default function AppLayout() {
  const { user, initialized } = useSession();

  // Don't render anything until auth is initialized
  if (!initialized) {
    return null;
  }

  // If user is not authenticated, redirect to login
  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Stack screenOptions={{ headerRight: () => <ThemeToggle /> }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
