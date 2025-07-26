import * as React from "react";
import { View, ScrollView } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { useSession } from "~/lib/auth-ctx";

const GITHUB_AVATAR_URI =
  "https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg";

export default function ProfileScreen() {
  const { signOut, user } = useSession();

  const profileStats = [
    { label: "Flights Booked", value: "12" },
    { label: "Miles Earned", value: "45,230" },
    { label: "Member Since", value: "2022" },
  ];

  const recentBookings = [
    {
      id: 1,
      route: "NYC → LAX",
      date: "Dec 15, 2024",
      status: "Confirmed",
    },
    {
      id: 2,
      route: "CHI → MIA",
      date: "Nov 28, 2024",
      status: "Completed",
    },
    {
      id: 3,
      route: "SEA → DEN",
      date: "Nov 10, 2024",
      status: "Completed",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-secondary/30">
      <View className="p-6 gap-6">
        {/* Profile Header */}
        <Card className="w-full">
          <CardHeader className="items-center">
            <Avatar alt="User Avatar" className="w-24 h-24 mb-4">
              <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
              <AvatarFallback>
                <Text>RS</Text>
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-xl">Rick Sanchez</CardTitle>
            <CardDescription className="text-base">
              This is a static profile page just for demo purposes, There is no
              user metadata attached to auth yet
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Stats */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Your Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <View className="flex-row justify-around">
              {profileStats.map((stat, index) => (
                <View key={index} className="items-center">
                  <Text className="text-2xl font-bold text-sky-600">
                    {stat.value}
                  </Text>
                  <Text className="text-sm text-muted-foreground text-center">
                    {stat.label}
                  </Text>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>

        {/* Recent Bookings */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>Your latest flight reservations</CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            {recentBookings.map((booking) => (
              <View
                key={booking.id}
                className="flex-row justify-between items-center p-3 bg-secondary/50 rounded-lg"
              >
                <View>
                  <Text className="font-semibold">{booking.route}</Text>
                  <Text className="text-sm text-muted-foreground">
                    {booking.date}
                  </Text>
                </View>
                <View className="items-end">
                  <Text
                    className={`text-sm font-medium ${
                      booking.status === "Confirmed"
                        ? "text-green-600"
                        : "text-blue-600"
                    }`}
                  >
                    {booking.status}
                  </Text>
                </View>
              </View>
            ))}
          </CardContent>
        </Card>

        {/* Settings */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="gap-3">
            <Button variant="outline" className="w-full">
              <Text>Edit Profile</Text>
            </Button>
            <Button variant="outline" className="w-full">
              <Text>Notification Settings</Text>
            </Button>
            <Button variant="outline" className="w-full">
              <Text>Privacy & Security</Text>
            </Button>
            <Button
              variant="destructive"
              className="w-full mt-4"
              onPress={signOut}
            >
              <Text>Sign Out</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
