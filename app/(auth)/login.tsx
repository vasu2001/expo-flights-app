import React, { useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";
import { useSession } from "~/lib/auth-ctx";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { Label } from "~/components/ui/label";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { signIn } = useSession();

  const handleLogin = async () => {
    try {
      console.log(email, password);
      signIn(email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <View className="flex-1 justify-center p-6">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent className="gap-4">
          <View>
            <Label nativeID="email-label">Email</Label>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              autoComplete="email"
              aria-labelledby="email-label"
            />
          </View>
          <View>
            <Label nativeID="password-label">Password</Label>
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoComplete="password"
              aria-labelledby="password-label"
            />
          </View>
          {error && (
            <Text className="text-destructive text-center text-sm">
              {error}
            </Text>
          )}
          <View className="gap-2">
            <Button onPress={handleLogin} className="w-full">
              <Text>Login</Text>
            </Button>
            <Button
              variant="outline"
              onPress={() => router.push("/signup")}
              className="w-full"
            >
              <Text>Sign up</Text>
            </Button>
          </View>
        </CardContent>
      </Card>
    </View>
  );
};

export default LoginScreen;
