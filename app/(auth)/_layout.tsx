import { Redirect, Stack } from "expo-router";
import { ThemeToggle } from "~/components/ThemeToggle";
import { useSession } from "~/lib/auth-ctx";

export default function AuthLayout() {
  const { user, initialized } = useSession();

  // Don't render anything until auth is initialized
  if (!initialized) {
    return null;
  }

  // If user is authenticated, redirect to main app
  if (user) {
    return <Redirect href="/(app)" />;
  }

  return (
    <Stack screenOptions={{ headerRight: () => <ThemeToggle /> }}>
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="signup" options={{ title: "Signup" }} />
    </Stack>
  );
}
