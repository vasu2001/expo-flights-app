import {
  AirportOption,
  FlightSearchForm,
  FlightResult,
  CabinClass,
  SortOption,
  Currency,
} from "./types";

/**
 * Format date to YYYY-MM-DD format required by the API
 */
export function formatDateForAPI(date: Date): string {
  return date.toISOString().split("T")[0];
}

/**
 * Parse API date string to Date object
 */
export function parseAPIDate(dateString: string): Date {
  return new Date(dateString);
}

/**
 * Format duration in minutes to human readable format
 */
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours === 0) {
    return `${mins}m`;
  }

  if (mins === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${mins}m`;
}

/**
 * Format time from ISO string to local time
 */
export function formatTime(isoString: string): string {
  return new Date(isoString).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

/**
 * Format date from ISO string to local date
 */
export function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

/**
 * Validate flight search form
 */
export function validateFlightSearch(form: FlightSearchForm): string[] {
  const errors: string[] = [];

  if (!form.origin) {
    errors.push("Origin airport is required");
  }

  if (!form.destination) {
    errors.push("Destination airport is required");
  }

  if (
    form.origin &&
    form.destination &&
    form.origin.id === form.destination.id
  ) {
    errors.push("Origin and destination cannot be the same");
  }

  if (!form.departureDate) {
    errors.push("Departure date is required");
  }

  if (form.departureDate) {
    const departureDate = new Date(form.departureDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (departureDate < today) {
      errors.push("Departure date cannot be in the past");
    }
  }

  if (form.returnDate) {
    const departureDate = new Date(form.departureDate);
    const returnDate = new Date(form.returnDate);

    if (returnDate <= departureDate) {
      errors.push("Return date must be after departure date");
    }
  }

  if (form.passengers.adults < 1) {
    errors.push("At least one adult passenger is required");
  }

  if (form.passengers.children < 0) {
    errors.push("Number of children cannot be negative");
  }

  if (form.passengers.infants < 0) {
    errors.push("Number of infants cannot be negative");
  }

  const totalPassengers =
    form.passengers.adults + form.passengers.children + form.passengers.infants;
  if (totalPassengers > 9) {
    errors.push("Maximum 9 passengers allowed");
  }

  return errors;
}

/**
 * Get cabin class display name
 */
export function getCabinClassDisplay(cabinClass: CabinClass): string {
  const displayNames: Record<CabinClass, string> = {
    economy: "Economy",
    premium_economy: "Premium Economy",
    business: "Business",
    first: "First Class",
  };

  return displayNames[cabinClass] || cabinClass;
}

/**
 * Get sort option display name
 */
export function getSortOptionDisplay(sortOption: SortOption): string {
  const displayNames: Record<SortOption, string> = {
    price: "Price",
    duration: "Duration",
    departure_time: "Departure Time",
    arrival_time: "Arrival Time",
  };

  return displayNames[sortOption] || sortOption;
}

/**
 * Get currency symbol
 */
export function getCurrencySymbol(currency: Currency): string {
  const symbols: Record<Currency, string> = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    CAD: "C$",
    AUD: "A$",
  };

  return symbols[currency] || currency;
}

/**
 * Calculate total duration for round trip flights
 */
export function calculateTotalDuration(
  outboundDuration: number,
  inboundDuration?: number
): number {
  if (!inboundDuration) {
    return outboundDuration;
  }

  return outboundDuration + inboundDuration;
}

/**
 * Get stop count display text
 */
export function getStopCountDisplay(stops: number): string {
  if (stops === 0) {
    return "Direct";
  }

  if (stops === 1) {
    return "1 stop";
  }

  return `${stops} stops`;
}

/**
 * Check if flight is direct
 */
export function isDirectFlight(stops: number): boolean {
  return stops === 0;
}

/**
 * Check if flight has layovers
 */
export function hasLayovers(stops: number): boolean {
  return stops > 0;
}

/**
 * Get price range from flight results
 */
export function getPriceRange(flights: FlightResult[]): {
  min: number;
  max: number;
} {
  if (flights.length === 0) {
    return { min: 0, max: 0 };
  }

  const prices = flights.map((flight) => flight.price.raw);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
}

/**
 * Filter flights by price range
 */
export function filterFlightsByPrice(
  flights: FlightResult[],
  minPrice: number,
  maxPrice: number
): FlightResult[] {
  return flights.filter(
    (flight) => flight.price.raw >= minPrice && flight.price.raw <= maxPrice
  );
}

/**
 * Filter flights by stops
 */
export function filterFlightsByStops(
  flights: FlightResult[],
  maxStops: number
): FlightResult[] {
  return flights.filter((flight) => flight.stops <= maxStops);
}

/**
 * Sort flights by various criteria
 */
export function sortFlights(
  flights: FlightResult[],
  sortBy: SortOption
): FlightResult[] {
  const sorted = [...flights];

  switch (sortBy) {
    case "price":
      return sorted.sort((a, b) => a.price.raw - b.price.raw);
    case "duration":
      return sorted.sort((a, b) => a.duration - b.duration);
    case "departure_time":
      return sorted.sort(
        (a, b) =>
          new Date(a.departure).getTime() - new Date(b.departure).getTime()
      );
    case "arrival_time":
      return sorted.sort(
        (a, b) => new Date(a.arrival).getTime() - new Date(b.arrival).getTime()
      );
    default:
      return sorted;
  }
}

/**
 * Debounce function for search inputs
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function for API calls
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
