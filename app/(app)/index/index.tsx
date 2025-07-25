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
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { router } from "expo-router";

export default function HomeScreen() {
  const [fromLocation, setFromLocation] = React.useState("");
  const [toLocation, setToLocation] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState("");

  const quickActions = [
    {
      title: "My Bookings",
      description: "View your upcoming flights",
      icon: "📋",
    },
    {
      title: "Flight Status",
      description: "Check your flight status",
      icon: "✈️",
    },
    {
      title: "Miles & Rewards",
      description: "Track your loyalty points",
      icon: "⭐",
    },
    {
      title: "Travel Alerts",
      description: "Stay updated on changes",
      icon: "🔔",
    },
  ];

  const popularDestinations = [
    { city: "New York", code: "NYC", image: "🗽" },
    { city: "Los Angeles", code: "LAX", image: "🌴" },
    { city: "Miami", code: "MIA", image: "🏖️" },
    { city: "Chicago", code: "CHI", image: "🏙️" },
    { city: "Seattle", code: "SEA", image: "🌧️" },
    { city: "Denver", code: "DEN", image: "🏔️" },
  ];

  const featuredFlights = [
    {
      id: 1,
      from: "New York",
      to: "Los Angeles",
      airline: "Delta Airlines",
      departure: "10:30 AM",
      arrival: "1:45 PM",
      price: "$299",
      duration: "5h 15m",
      stops: "Direct",
    },
    {
      id: 2,
      from: "Chicago",
      to: "Miami",
      airline: "American Airlines",
      departure: "2:15 PM",
      arrival: "5:30 PM",
      price: "$189",
      duration: "3h 15m",
      stops: "Direct",
    },
  ];

  const handleFlightPress = (flight: any) => {
    router.push({
      pathname: "/(app)/home/flight-details" as any,
      params: { flight: JSON.stringify(flight) },
    });
  };

  return (
    <ScrollView className="flex-1 bg-secondary/30">
      <View className="p-6 gap-6">
        {/* Welcome Header */}
        <View className="items-center mb-4">
          <Text className="text-3xl font-bold mb-2">Welcome Back!</Text>
          <Text className="text-muted-foreground text-center">
            Ready to explore the world? Find your perfect flight.
          </Text>
        </View>

        {/* Flight Search */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Search Flights</CardTitle>
            <CardDescription>
              Find the best deals for your next trip
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="gap-2">
              <Label>From</Label>
              <Input
                placeholder="Departure city"
                value={fromLocation}
                onChangeText={setFromLocation}
              />
            </View>
            <View className="gap-2">
              <Label>To</Label>
              <Input
                placeholder="Destination city"
                value={toLocation}
                onChangeText={setToLocation}
              />
            </View>
            <View className="gap-2">
              <Label>Departure Date</Label>
              <Input
                placeholder="MM/DD/YYYY"
                value={departureDate}
                onChangeText={setDepartureDate}
              />
            </View>
            <Button className="w-full mt-2">
              <Text>Search Flights</Text>
            </Button>
          </CardContent>
        </Card>

        {/* Featured Flights */}
        {/* <Card className="w-full">
          <CardHeader>
            <CardTitle>Featured Flights</CardTitle>
            <CardDescription>Popular routes with great prices</CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            {featuredFlights.map((flight) => (
              <Card key={flight.id} className="w-full">
                <CardContent className="p-4">
                  <View className="flex-row justify-between items-start mb-3">
                    <View>
                      <Text className="text-lg font-semibold">
                        {flight.airline}
                      </Text>
                      <Text className="text-muted-foreground">
                        {flight.from} → {flight.to}
                      </Text>
                    </View>
                    <Text className="text-xl font-bold text-sky-600">
                      {flight.price}
                    </Text>
                  </View>
                  <View className="flex-row justify-between items-center mb-3">
                    <View className="flex-row gap-4">
                      <View>
                        <Text className="text-sm text-muted-foreground">
                          Departure
                        </Text>
                        <Text className="font-semibold">
                          {flight.departure}
                        </Text>
                      </View>
                      <View>
                        <Text className="text-sm text-muted-foreground">
                          Arrival
                        </Text>
                        <Text className="font-semibold">{flight.arrival}</Text>
                      </View>
                    </View>
                    <View className="items-end">
                      <Text className="text-sm text-muted-foreground">
                        Duration
                      </Text>
                      <Text className="font-semibold">{flight.duration}</Text>
                    </View>
                  </View>
                  <View className="flex-row justify-between items-center">
                    <Text className="text-sm text-green-600 font-medium">
                      {flight.stops}
                    </Text>
                    <Button
                      variant="outline"
                      size="sm"
                      onPress={() => handleFlightPress(flight)}
                    >
                      <Text>View Details</Text>
                    </Button>
                  </View>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card> */}

        {/* Quick Actions */}
        {/* <Card className="w-full">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <View className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <Button key={index} variant="outline" className="h-20">
                  <View className="items-center">
                    <Text className="text-2xl mb-1">{action.icon}</Text>
                    <Text className="font-semibold text-sm">
                      {action.title}
                    </Text>
                    <Text className="text-xs text-muted-foreground text-center">
                      {action.description}
                    </Text>
                  </View>
                </Button>
              ))}
            </View>
          </CardContent>
        </Card> */}

        {/* Popular Destinations */}
        {/* <Card className="w-full">
          <CardHeader>
            <CardTitle>Popular Destinations</CardTitle>
            <CardDescription>Trending cities this season</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="gap-3"
            >
              {popularDestinations.map((destination, index) => (
                <Card key={index} className="w-32 min-w-32">
                  <CardContent className="items-center p-4">
                    <Text className="text-3xl mb-2">{destination.image}</Text>
                    <Text className="font-semibold text-center">
                      {destination.city}
                    </Text>
                    <Text className="text-sm text-muted-foreground">
                      {destination.code}
                    </Text>
                  </CardContent>
                </Card>
              ))}
            </ScrollView>
          </CardContent>
        </Card> */}

        {/* Special Offers */}
        {/* <Card className="w-full">
          <CardHeader>
            <CardTitle>Special Offers</CardTitle>
            <CardDescription>Limited time deals</CardDescription>
          </CardHeader>
          <CardContent>
            <View className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 rounded-lg">
              <Text className="text-white text-lg font-bold mb-2">
                Save 20% on Flights
              </Text>
              <Text className="text-white/90 mb-3">
                Book your next adventure and enjoy exclusive discounts on select
                routes.
              </Text>
              <Button variant="secondary" className="w-full">
                <Text>View Offers</Text>
              </Button>
            </View>
          </CardContent>
        </Card> */}
      </View>
    </ScrollView>
  );
}
