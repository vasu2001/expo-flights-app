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
  type: string; // Changed from union type to string to match sample
  parent?: {
    flightPlaceId: string;
    displayCode: string;
    name: string;
    type: string; // Changed from union type to string to match sample
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
  operationType: string; // Changed from union type to string to match sample
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

// Search Context - Updated to match sample response
export interface SearchContext {
  status: string; // Changed from union type to string to match sample
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
  entityId?: string;
  skyId?: string;
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
  returnDeparture?: string;
  returnArrival?: string;
  returnDuration?: number;
  returnStops?: number;
  isRoundTrip?: boolean;
}

// Sky Scrapper API Types
export interface FlightDetails {
  id: string;
  airline: string;
  airlineLogo?: string;
  flightNumber: string;
  departure: {
    airport: string;
    time: string;
    terminal?: string;
  };
  arrival: {
    airport: string;
    time: string;
    terminal?: string;
  };
  duration: string;
  stops: number;
  price: {
    amount: number;
    currency: string;
    formatted: string;
  };
  cabinClass?: string;
  aircraft?: string;
  operatingAirline?: string;
  bookingClass?: string;
  fareBasis?: string;
  refundable?: boolean;
  changeable?: boolean;
  baggage?: {
    checked?: string;
    carryOn?: string;
  };
  amenities?: string[];
  warnings?: string[];
}

export interface FlightDetailsRequest {
  itineraryId: string;
  legs: string;
  sessionId: string;
  adults?: number;
  children?: number;
  infants?: number;
  cabinClass?: "economy" | "premium_economy" | "business" | "first";
  currency?: string;
  market?: string;
  countryCode?: string;
}

export interface FlightDetailsResponse {
  status: boolean;
  timestamp: number;
  data: {
    itinerary: Itinerary;
    pollingCompleted: boolean;
  };
  message?: string;
}

// Types for the new structure
export interface Itinerary {
  legs: ItineraryLeg[];
  pricingOptions: PricingOption[];
  isTransferRequired: boolean;
  destinationImage: string;
  operatingCarrierSafetyAttributes: SafetyAttribute[];
  flexibleTicketPolicies: any[];
}

export interface ItineraryLeg {
  id: string;
  origin: ItineraryPlace;
  destination: ItineraryPlace;
  segments: ItinerarySegment[];
  duration: number;
  stopCount: number;
  departure: string;
  arrival: string;
  dayChange: number;
}

export interface ItineraryPlace {
  id: string;
  name: string;
  displayCode: string;
  city: string;
}

export interface ItinerarySegment {
  id: string;
  origin: ItineraryPlace;
  destination: ItineraryPlace;
  duration: number;
  dayChange: number;
  flightNumber: string;
  departure: string;
  arrival: string;
  marketingCarrier: ItineraryCarrier;
  operatingCarrier: ItineraryCarrier;
}

export interface ItineraryCarrier {
  id: string;
  name: string;
  displayCode: string;
  displayCodeType: string;
  logo: string;
  altId: string;
}

export interface PricingOption {
  agents: PricingAgent[];
  totalPrice: number;
}

export interface PricingAgent {
  id: string;
  name: string;
  isCarrier: boolean;
  bookingProposition: string;
  url: string;
  price: number;
  rating: {
    value: number;
    count: number;
  };
  updateStatus: string;
  segments: ItinerarySegment[];
  isDirectDBookUrl: boolean;
  quoteAge: number;
}

export interface SafetyAttribute {
  carrierID: string;
  carrierName: string;
  faceMasksCompulsory: boolean | null;
  aircraftDeepCleanedDaily: boolean | null;
  attendantsWearPPE: boolean | null;
  cleaningPacksProvided: boolean | null;
  foodServiceChanges: boolean | null;
  safetyUrl: string | null;
}
