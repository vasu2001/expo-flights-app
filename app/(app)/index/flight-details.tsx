import * as React from "react";
import { View, ScrollView } from "react-native";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { useLocalSearchParams, router } from "expo-router";

export default function FlightDetailsScreen() {
  const params = useLocalSearchParams();
  const flight = params.flight ? JSON.parse(params.flight as string) : null;

  if (!flight) {
    return (
      <View className="flex-1 justify-center items-center p-6">
        <Text className="text-lg">Flight details not found</Text>
        <Button onPress={() => router.back()} className="mt-4">
          <Text>Go Back</Text>
        </Button>
      </View>
    );
  }

  const flightDetails = [
    {
      label: "Flight Number",
      value: `DL${Math.floor(Math.random() * 1000) + 100}`,
    },
    { label: "Aircraft", value: "Boeing 737-800" },
    { label: "Seat Class", value: "Economy" },
    { label: "Baggage Allowance", value: "1 checked + 1 carry-on" },
    { label: "Meal Service", value: "Complimentary snack" },
    { label: "Wi-Fi", value: "Available" },
  ];

  const amenities = [
    { name: "Power Outlets", available: true },
    { name: "USB Charging", available: true },
    { name: "Entertainment", available: true },
    { name: "Wi-Fi", available: true },
    { name: "Meal Service", available: true },
    { name: "Priority Boarding", available: false },
  ];

  return (
    <ScrollView className="flex-1 bg-secondary/30">
      <View className="p-6 gap-6">
        {/* Flight Header */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">{flight.airline}</CardTitle>
            <CardDescription className="text-lg">
              {flight.from} → {flight.to}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-3xl font-bold text-sky-600">
                {flight.price}
              </Text>
              <Text className="text-lg font-semibold">{flight.duration}</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-sm text-muted-foreground">Departure</Text>
                <Text className="text-xl font-semibold">
                  {flight.departure}
                </Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl">✈️</Text>
                <Text className="text-sm text-green-600 font-medium">
                  {flight.stops}
                </Text>
              </View>
              <View className="items-end">
                <Text className="text-sm text-muted-foreground">Arrival</Text>
                <Text className="text-xl font-semibold">{flight.arrival}</Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Flight Details */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Flight Information</CardTitle>
          </CardHeader>
          <CardContent>
            <View className="gap-3">
              {flightDetails.map((detail, index) => (
                <View
                  key={index}
                  className="flex-row justify-between items-center py-2 border-b border-border/50"
                >
                  <Text className="text-muted-foreground">{detail.label}</Text>
                  <Text className="font-semibold">{detail.value}</Text>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>

        {/* Amenities */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Onboard Amenities</CardTitle>
            <CardDescription>What's included with your flight</CardDescription>
          </CardHeader>
          <CardContent>
            <View className="gap-3">
              {amenities.map((amenity, index) => (
                <View
                  key={index}
                  className="flex-row justify-between items-center py-2"
                >
                  <Text className="font-medium">{amenity.name}</Text>
                  <View className="flex-row items-center">
                    {amenity.available ? (
                      <Text className="text-green-600 font-semibold">
                        ✓ Available
                      </Text>
                    ) : (
                      <Text className="text-muted-foreground">
                        ✗ Not Available
                      </Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>

        {/* Cancellation Policy */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Cancellation Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <View className="gap-2">
              <Text className="text-sm text-muted-foreground">
                • Free cancellation within 24 hours of booking
              </Text>
              <Text className="text-sm text-muted-foreground">
                • 50% refund if cancelled 7+ days before departure
              </Text>
              <Text className="text-sm text-muted-foreground">
                • No refund for cancellations within 7 days
              </Text>
            </View>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <View className="gap-3">
          <Button className="w-full" size="lg">
            <Text className="text-lg">Book This Flight</Text>
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onPress={() => router.back()}
          >
            <Text>Back to Search</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
