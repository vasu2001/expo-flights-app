import { DEFAULT_CONFIG, FlightAPIConfig } from "./config";
import {
  NearbyAirportsRequest,
  NearbyAirportsResponse,
  SearchAirportsRequest,
  SearchAirportsResponse,
  SearchFlightsRequest,
  SearchFlightsResponse,
  ApiResponse,
} from "./types";

export class FlightAPIError extends Error {
  constructor(message: string, public status?: number, public response?: any) {
    super(message);
    this.name = "FlightAPIError";
  }
}

export class FlightAPI {
  private config: FlightAPIConfig;
  private defaultTimeout = 30000; // 30 seconds

  constructor(config = DEFAULT_CONFIG) {
    this.config = {
      ...config,
      timeout: config.timeout || this.defaultTimeout,
    };
  }

  private async makeRequest<T>(
    endpoint: string,
    params: Record<string, any> = {}
  ): Promise<T> {
    const url = new URL(`${this.config.baseUrl}${endpoint}`);

    // Add query parameters
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, value.toString());
      }
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

    try {
      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": this.config.apiKey,
          "X-RapidAPI-Host": "skyscanner-api.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new FlightAPIError(
          `HTTP ${response.status}: ${response.statusText}`,
          response.status
        );
      }

      const data = await response.json();

      // Check if the API returned an error response
      if (!data.status) {
        throw new FlightAPIError(
          "API returned an error response",
          response.status,
          data
        );
      }

      return data as T;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof FlightAPIError) {
        throw error;
      }

      if (error instanceof Error) {
        if (error.name === "AbortError") {
          throw new FlightAPIError("Request timeout", 408);
        }
        throw new FlightAPIError(`Network error: ${error.message}`);
      }

      throw new FlightAPIError("Unknown error occurred");
    }
  }

  /**
   * Get nearby airports based on latitude and longitude
   * @param params - Latitude and longitude coordinates
   * @returns Promise with nearby airports data
   */
  async getNearbyAirports(
    params: NearbyAirportsRequest
  ): Promise<NearbyAirportsResponse> {
    return this.makeRequest<NearbyAirportsResponse>(
      "/api/v1/flights/getNearByAirports",
      {
        lat: params.lat,
        lng: params.lng,
      }
    );
  }

  /**
   * Search for airports based on a query string
   * @param params - Search query
   * @returns Promise with airport search results
   */
  async searchAirports(
    params: SearchAirportsRequest
  ): Promise<SearchAirportsResponse> {
    return this.makeRequest<SearchAirportsResponse>(
      "/api/v1/flights/searchAirport",
      {
        query: params.query,
      }
    );
  }

  /**
   * Search for flights based on origin, destination, and date
   * @param params - Flight search parameters
   * @returns Promise with flight search results
   */
  async searchFlights(
    params: SearchFlightsRequest
  ): Promise<SearchFlightsResponse> {
    return this.makeRequest<SearchFlightsResponse>(
      "/api/v1/flights/searchFlights",
      {
        originSkyId: params.originSkyId,
        destinationSkyId: params.destinationSkyId,
        originEntityId: params.originEntityId,
        destinationEntityId: params.destinationEntityId,
        date: params.date,
        returnDate: params.returnDate,
        adults: params.adults,
        cabinClass: params.cabinClass,
        sortBy: params.sortBy,
        childrens: params.childrens,
        infants: params.infants,
        currency: params.currency,
        market: params.market,
        countryCode: params.countryCode,
      }
    );
  }

  /**
   * Helper method to convert Location to AirportOption for UI usage
   */
  static locationToAirportOption(location: any): any {
    return {
      id: location.skyId,
      code: location.skyId,
      name: location.presentation.title,
      city: location.presentation.title,
      country: location.presentation.subtitle,
      type: location.navigation.entityType.toLowerCase() as "airport" | "city",
      entityId: location.entityId,
      skyId: location.skyId,
    };
  }

  /**
   * Helper method to convert FlightItinerary to FlightResult for UI usage
   */
  static itineraryToFlightResult(itinerary: any): any {
    const outboundLeg = itinerary.legs[0];
    const inboundLeg = itinerary.legs[1];

    return {
      id: itinerary.id,
      price: itinerary.price,
      duration: outboundLeg.durationInMinutes,
      stops: outboundLeg.stopCount,
      departure: outboundLeg.departure,
      arrival: outboundLeg.arrival,
      airline: outboundLeg.carriers.marketing[0]?.name || "Unknown",
      airlineLogo: outboundLeg.carriers.marketing[0]?.logoUrl,
      tags: itinerary.tags,
      returnDeparture: inboundLeg?.departure,
      returnArrival: inboundLeg?.arrival,
      returnDuration: inboundLeg?.durationInMinutes,
      returnStops: inboundLeg?.stopCount,
      isRoundTrip: itinerary.legs.length > 1,
    };
  }
}
