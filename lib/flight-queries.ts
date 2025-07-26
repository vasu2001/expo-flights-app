import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FlightAPI } from "../api/flight-client";
import type {
  NearbyAirportsRequest,
  SearchAirportsRequest,
  SearchFlightsRequest,
  NearbyAirportsResponse,
  SearchAirportsResponse,
  SearchFlightsResponse,
} from "../api/flight-client";

// Create a singleton instance of the FlightAPI
const flightAPI = new FlightAPI();

// Query keys for better cache management
export const flightQueryKeys = {
  all: ["flights"] as const,
  nearbyAirports: (params: NearbyAirportsRequest) =>
    ["flights", "nearbyAirports", params] as const,
  searchAirports: (query: string) =>
    ["flights", "searchAirports", query] as const,
  searchFlights: (params: SearchFlightsRequest) =>
    ["flights", "searchFlights", params] as const,
} as const;

/**
 * Hook to get nearby airports based on coordinates
 */
export function useNearbyAirports(params: NearbyAirportsRequest | null) {
  return useQuery({
    queryKey: flightQueryKeys.nearbyAirports(params!),
    queryFn: () => flightAPI.getNearbyAirports(params!),
    enabled: !!params && !!params.lat && !!params.lng,
    staleTime: 10 * 60 * 1000, // 10 minutes - airports don't change often
  });
}

/**
 * Hook to search for airports
 */
export function useSearchAirports(params: SearchAirportsRequest) {
  return useQuery({
    queryKey: flightQueryKeys.searchAirports(params.query),
    queryFn: () => flightAPI.searchAirports(params),
    enabled: !!params.query && params.query.length >= 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 15 * 60 * 1000, // 15 minutes
  });
}

/**
 * Hook to search for flights
 */
export function useSearchFlights(params: SearchFlightsRequest) {
  return useQuery({
    queryKey: flightQueryKeys.searchFlights(params),
    queryFn: () => flightAPI.searchFlights(params),
    enabled: !!(
      params.originSkyId &&
      params.destinationSkyId &&
      params.originEntityId &&
      params.destinationEntityId &&
      params.date
    ),
    staleTime: 2 * 60 * 1000, // 2 minutes - flight data changes frequently
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}

/**
 * Hook to invalidate flight search cache
 */
export function useInvalidateFlightSearch() {
  const queryClient = useQueryClient();

  return () => {
    queryClient.invalidateQueries({
      queryKey: ["flights", "searchFlights"],
    });
  };
}

/**
 * Hook to prefetch nearby airports
 */
export function usePrefetchNearbyAirports() {
  const queryClient = useQueryClient();

  return (params: NearbyAirportsRequest) => {
    queryClient.prefetchQuery({
      queryKey: flightQueryKeys.nearbyAirports(params),
      queryFn: () => flightAPI.getNearbyAirports(params),
      staleTime: 10 * 60 * 1000,
    });
  };
}

/**
 * Hook to prefetch airport search
 */
export function usePrefetchAirportSearch() {
  const queryClient = useQueryClient();

  return (query: string) => {
    if (query.length >= 2) {
      queryClient.prefetchQuery({
        queryKey: flightQueryKeys.searchAirports(query),
        queryFn: () => flightAPI.searchAirports({ query }),
        staleTime: 5 * 60 * 1000,
      });
    }
  };
}

/**
 * Hook to clear flight search cache
 */
export function useClearFlightCache() {
  const queryClient = useQueryClient();

  return () => {
    queryClient.removeQueries({
      queryKey: flightQueryKeys.all,
    });
  };
}
