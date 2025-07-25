import { Redirect, Tabs } from "expo-router";
import { ThemeToggle } from "~/components/ThemeToggle";
import { useSession } from "~/lib/auth-ctx";
import { Text } from "~/components/ui/text";

export default function AppLayout() {
  const { user, initialized } = useSession();

  // Don't render anything until auth is initialized
  if (!initialized) {
    return null;
  }

  // If user is not authenticated, redirect to login
  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerRight: () => <ThemeToggle />,
        tabBarActiveTintColor: "#0891b2", // sky-600
        tabBarInactiveTintColor: "#64748b", // slate-500
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

// Simple tab bar icon component
function TabBarIcon({
  name,
  color,
  size,
}: {
  name: string;
  color: string;
  size: number;
}) {
  return (
    <Text style={{ color, fontSize: size / 1.5, fontWeight: "bold" }}>
      {name === "home" && "🏠"}
      {name === "person" && "👤"}
    </Text>
  );
}
