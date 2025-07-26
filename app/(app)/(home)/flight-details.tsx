import React from "react";
import { View, ScrollView, Pressable } from "react-native";
import { Text } from "~/components/ui/text";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { useLocalSearchParams, router } from "expo-router";
import {
  FlightDetailsRequest,
  ItineraryLeg,
  PricingOption,
} from "~/api/flight-client";
import { useFlightDetails } from "~/lib/flight-queries";
import {
  ChevronDown,
  ChevronUp,
  Share,
  Plane,
  Briefcase,
  Luggage,
} from "lucide-react-native";

type FlightDetailsParams = FlightDetailsRequest & {};

export default function FlightDetailsScreen() {
  // TODO: type this params to FlightDetailsRequest, was facing error "does not satisfy the constraint 'Route'."
  const params = useLocalSearchParams<any>();

  const { data, isLoading, error } = useFlightDetails(params);

  const [expandedDeparting, setExpandedDeparting] = React.useState(false);
  const [expandedReturning, setExpandedReturning] = React.useState(false);

  // Helper function to format time from ISO string
  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Helper function to format date from ISO string
  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  // Helper function to format duration in minutes to readable format
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours} hr ${mins} min`;
  };

  // Loading state
  if (isLoading) {
    return (
      <ScrollView className="flex-1 bg-background">
        <View className="p-4 gap-6">
          <View className="bg-card rounded-lg p-4 border border-border">
            <Text className="text-lg font-semibold">
              Loading flight details...
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }

  // Error state
  if (error || !data?.data?.itinerary) {
    return (
      <ScrollView className="flex-1 bg-background">
        <View className="p-4 gap-6">
          <View className="bg-card rounded-lg p-4 border border-border">
            <Text className="text-lg font-semibold text-red-600">
              Error loading flight details
            </Text>
            <Text className="text-sm text-muted-foreground mt-2">
              {error?.message || "Unable to load flight information"}
            </Text>
            <Button className="w-full mt-4" onPress={() => router.back()}>
              <Text>Go Back</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }

  const itinerary = data.data.itinerary;
  const legs = itinerary.legs;
  const pricingOptions = itinerary.pricingOptions;

  const FlightCard = ({
    leg,
    title,
    isExpanded,
    onToggleExpand,
  }: {
    leg: ItineraryLeg;
    title: string;
    isExpanded: boolean;
    onToggleExpand: () => void;
  }) => {
    const firstSegment = leg.segments[0];
    const lastSegment = leg.segments[leg.segments.length - 1];
    const marketingCarrier = firstSegment?.marketingCarrier;

    return (
      <Card className="w-full mb-4">
        <CardContent className="p-4">
          <View className="flex-row justify-between items-start mb-3">
            <View className="flex-1">
              <Text className="text-sm font-medium text-muted-foreground mb-1">
                {title} · {formatDate(leg.departure)}
              </Text>
              <Text className="text-lg font-semibold">
                {formatTime(leg.departure)} → {formatTime(leg.arrival)}
              </Text>
              <Text className="text-sm text-muted-foreground">
                {leg.origin.displayCode} to {leg.destination.displayCode}
              </Text>
              <Text className="text-sm text-muted-foreground">
                {leg.stopCount === 0
                  ? "Nonstop"
                  : `${leg.stopCount} stop${leg.stopCount > 1 ? "s" : ""}`}{" "}
                · {formatDuration(leg.duration)} ·{" "}
                {marketingCarrier?.name || "Unknown"}
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Pressable onPress={onToggleExpand} className="p-1">
                {isExpanded ? (
                  <ChevronUp size={16} className="text-muted-foreground" />
                ) : (
                  <ChevronDown size={16} className="text-muted-foreground" />
                )}
              </Pressable>
            </View>
          </View>

          {isExpanded && (
            <View className="mt-3 pt-3 border-t border-border">
              <Text className="text-sm text-muted-foreground">
                Additional flight details would be shown here...
              </Text>
            </View>
          )}
        </CardContent>
      </Card>
    );
  };

  const BookingOption = ({
    pricingOption,
  }: {
    pricingOption: PricingOption;
  }) => {
    const lowestPrice = Math.min(
      ...pricingOption.agents.map((agent) => agent.price)
    );
    const lowestAgent = pricingOption.agents.find(
      (agent) => agent.price === lowestPrice
    );

    return (
      <Card className="w-full mb-3">
        <CardContent className="p-4">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-3 flex-1">
              <View className="w-10 h-10 bg-muted rounded-lg items-center justify-center">
                <Plane size={20} className="text-foreground" />
              </View>
              <View className="flex-row items-center gap-2 flex-1">
                <Text className="font-medium">
                  Book with {lowestAgent?.name || "Unknown"}
                </Text>
              </View>
            </View>
            <View className="items-end">
              <Text
                className={`text-lg font-semibold ${
                  lowestAgent?.price === lowestPrice
                    ? "text-green-600"
                    : "text-foreground"
                }`}
              >
                ₹{lowestPrice.toLocaleString()}
              </Text>
              <Button size="sm" className="mt-2">
                <Text className="text-sm">Continue</Text>
              </Button>
            </View>
          </View>
        </CardContent>
      </Card>
    );
  };

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4 gap-6">
        {/* Header Section */}
        <View className="bg-card rounded-lg p-4 border border-border">
          <View className="flex-row justify-between items-start mb-4">
            <View className="flex-1">
              <Text className="text-2xl font-bold mb-1">
                {legs[0]?.origin.city} → {legs[0]?.destination.city}
              </Text>
              <Text className="text-sm text-muted-foreground">
                {legs.length > 1 ? "Round trip" : "One way"} • Economy • 1
                passenger
              </Text>
            </View>
            <View className="items-end">
              <View className="flex-row items-center gap-2 mb-2">
                <Text className="text-lg font-bold">
                  ₹{pricingOptions[0]?.totalPrice?.toLocaleString() || "0"}
                </Text>
                <Pressable onPress={() => {}} className="p-1">
                  <Share size={16} className="text-muted-foreground" />
                </Pressable>
              </View>
              <Text className="text-xs text-muted-foreground">
                Lowest total price
              </Text>
            </View>
          </View>
        </View>

        {/* Selected Flights Section */}
        <View>
          <Text className="text-lg font-semibold mb-4">Selected flights</Text>

          {legs.map((leg, index) => (
            <FlightCard
              key={leg.id}
              leg={leg}
              title={index === 0 ? "Departing flight" : "Returning flight"}
              isExpanded={index === 0 ? expandedDeparting : expandedReturning}
              onToggleExpand={() => {
                if (index === 0) {
                  setExpandedDeparting(!expandedDeparting);
                } else {
                  setExpandedReturning(!expandedReturning);
                }
              }}
            />
          ))}

          {/* Baggage Information */}
          <Card className="w-full mb-4">
            <CardContent className="p-4">
              <View className="flex-row items-center gap-3 mb-2">
                <Briefcase size={16} className="text-muted-foreground" />
                <Text className="text-sm">1 free carry-on</Text>
              </View>
              <View className="flex-row items-center gap-3 mb-3">
                <Luggage size={16} className="text-muted-foreground" />
                <Text className="text-sm">1st checked bag free</Text>
              </View>
              <Text className="text-xs text-muted-foreground">
                Baggage conditions apply to your entire trip. Bag fees may be
                higher at the airport.{" "}
                <Text className="text-primary underline">
                  {legs[0]?.segments[0]?.marketingCarrier?.name || "Airline"}{" "}
                  bag policy
                </Text>
              </Text>
            </CardContent>
          </Card>
        </View>

        {/* Booking Options Section */}
        <View>
          <View className="flex-row items-center gap-2 mb-4">
            <Text className="text-lg font-semibold">Booking options</Text>
          </View>

          {pricingOptions.map((pricingOption, index) => (
            <BookingOption key={index} pricingOption={pricingOption} />
          ))}
        </View>

        {/* Back Button */}
        <Button className="w-full mt-6" onPress={() => router.back()}>
          <Text>Go Back</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
