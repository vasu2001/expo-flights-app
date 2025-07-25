import { Link, Stack } from "expo-router";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center">
        <Text>This screen doesn't exist.</Text>

        <Link href="/home">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
