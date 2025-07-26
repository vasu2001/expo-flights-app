import React from "react";
import { View, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { useLocalSearchParams, router } from "expo-router";

export default function FlightDetailsScreen() {
  const { flightId } = useLocalSearchParams<{ flightId: string }>();

  return (
    <ScrollView className="flex-1 bg-secondary/30">
      <View className="p-6 gap-6">
        {/* Header */}
        <View className="items-center mb-4">
          <Text className="text-2xl font-bold mb-2">Flight Details</Text>
          <Text className="text-muted-foreground text-center">
            Flight ID: {flightId}
          </Text>
        </View>

        {/* Flight Details Card */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Flight Information</CardTitle>
          </CardHeader>
          <CardContent className="gap-4">
            <Text className="text-muted-foreground">
              This is a placeholder for the flight details page. In a real app,
              you would fetch the flight details using the flight ID and display
              comprehensive information about the selected flight.
            </Text>

            <Button className="w-full mt-4" onPress={() => router.back()}>
              <Text>Go Back</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
