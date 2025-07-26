// Base API Response Structure
export interface ApiResponse<T> {
  status: boolean;
  timestamp: number;
  data: T;
  sessionId?: string;
}

// Common Location/Airport Types
export interface FlightPlace {
  flightPlaceId: string;
  displayCode: string;
  name: string;
  type: "Airport" | "City";
  parent?: {
    flightPlaceId: string;
    displayCode: string;
    name: string;
    type: "City";
  };
}

export interface AirportInfo {
  id: string;
  name: string;
  displayCode: string;
  city: string;
  isHighlighted: boolean;
}

export interface LocationPresentation {
  title: string;
  suggestionTitle: string;
  subtitle: string;
}

export interface RelevantFlightParams {
  skyId: string;
  entityId: string;
  flightPlaceType: "AIRPORT" | "CITY";
  localizedName: string;
}

export interface RelevantHotelParams {
  entityId: string;
  entityType: "CITY";
  localizedName: string;
}

export interface LocationNavigation {
  entityId: string;
  entityType: "AIRPORT" | "CITY";
  localizedName: string;
  relevantFlightParams: RelevantFlightParams;
  relevantHotelParams: RelevantHotelParams;
}

export interface AirportLocation {
  presentation: {
    title: string;
    suggestionTitle: string;
    subtitle: string;
  };
  navigation: {
    entityId: string;
    entityType: string;
    localizedName: string;
    relevantFlightParams: {
      skyId: string;
      entityId: string;
      flightPlaceType: string;
      localizedName: string;
    };
    relevantHotelParams: {
      entityId: string;
      entityType: string;
      localizedName: string;
    };
  };
}

// Carrier/Airline Types
export interface Carrier {
  id: number;
  logoUrl?: string;
  name: string;
  alternateId?: string;
  allianceId?: number;
}

export interface Carriers {
  marketing: Carrier[];
  operationType: "fully_operated" | "codeshare";
}

// Flight Segment Types
export interface FlightSegment {
  id: string;
  origin: FlightPlace;
  destination: FlightPlace;
  departure: string; // ISO datetime string
  arrival: string; // ISO datetime string
  durationInMinutes: number;
  flightNumber: string;
  marketingCarrier: Carrier;
  operatingCarrier: Carrier;
}

// Flight Leg Types
export interface FlightLeg {
  id: string;
  origin: AirportInfo;
  destination: AirportInfo;
  durationInMinutes: number;
  stopCount: number;
  isSmallestStops: boolean;
  departure: string; // ISO datetime string
  arrival: string; // ISO datetime string
  timeDeltaInDays: number;
  carriers: Carriers;
  segments: FlightSegment[];
}

// Price Types
export interface Price {
  raw: number;
  formatted: string;
}

// Fare Policy Types
export interface FarePolicy {
  isChangeAllowed: boolean;
  isPartiallyChangeable: boolean;
  isCancellationAllowed: boolean;
  isPartiallyRefundable: boolean;
}

// Eco Information
export interface EcoInfo {
  ecoContenderDelta: number;
}

// Flight Itinerary Types
export interface FlightItinerary {
  id: string;
  price: Price;
  legs: FlightLeg[];
  isSelfTransfer: boolean;
  isProtectedSelfTransfer: boolean;
  farePolicy: FarePolicy;
  eco?: EcoInfo;
  tags: string[];
  isMashUp: boolean;
  hasFlexibleOptions: boolean;
  score: number;
}

// Search Context
export interface SearchContext {
  status: "incomplete" | "complete";
  totalResults: number;
}

// Filter Stats Types
export interface AirportFilter {
  id: string;
  name: string;
}

export interface CityAirports {
  city: string;
  airports: AirportFilter[];
}

export interface CarrierFilter {
  id: number;
  logoUrl: string;
  name: string;
}

export interface StopPrice {
  isPresent: boolean;
  formattedPrice?: string;
}

export interface StopPrices {
  direct: StopPrice;
  one: StopPrice;
  twoOrMore: StopPrice;
}

export interface FilterStats {
  duration: {
    min: number;
    max: number;
  };
  airports: CityAirports[];
  carriers: CarrierFilter[];
  stopPrices: StopPrices;
}

// Nearby Airports Response
export interface NearbyAirportsData {
  current: AirportLocation;
  nearby: AirportLocation[];
  recent: AirportLocation[];
}

export type NearbyAirportsResponse = ApiResponse<NearbyAirportsData>;

// Search Airports Response
export type SearchAirportsResponse = ApiResponse<AirportLocation[]>;

// Search Flights Response
export interface SearchFlightsData {
  context: SearchContext;
  itineraries: FlightItinerary[];
  messages: string[];
  filterStats: FilterStats;
}

export type SearchFlightsResponse = ApiResponse<SearchFlightsData>;

// Request Types
export interface NearbyAirportsRequest {
  lat: number;
  lng: number;
}

export interface SearchAirportsRequest {
  query: string;
}

export interface SearchFlightsRequest {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string; // YYYY-MM-DD format
  returnDate?: string; // YYYY-MM-DD format
  adults?: number;
  cabinClass?: string;
  sortBy?: string;
  childrens?: number;
  infants?: number;
  currency?: string;
  market?: string;
  countryCode?: string;
}

// Reusable UI Types (for frontend components)
export interface AirportOption {
  id: string;
  code: string;
  name: string;
  city: string;
  country: string;
  type: "airport" | "city";
}

export interface FlightSearchForm {
  origin: AirportOption | null;
  destination: AirportOption | null;
  departureDate: string;
  returnDate?: string;
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
  cabinClass: string;
}

export interface FlightResult {
  id: string;
  price: Price;
  duration: number;
  stops: number;
  departure: string;
  arrival: string;
  airline: string;
  airlineLogo?: string;
  tags: string[];
}

// Utility Types
export type CabinClass = "economy" | "premium_economy" | "business" | "first";
export type SortOption =
  | "price"
  | "duration"
  | "departure_time"
  | "arrival_time";
export type Currency = "USD" | "EUR" | "GBP" | "CAD" | "AUD";
