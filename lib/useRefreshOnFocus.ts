import React from "react";
import { useFocusEffect } from "@react-navigation/native";

/**
 * Hook that refetches data when a React Native screen gains focus.
 * Useful for keeping data fresh when users navigate back to a screen.
 *
 * @param refetch - Function to call when screen gains focus
 * @param skipFirst - Whether to skip the first focus event (default: true)
 */
export function useRefreshOnFocus<T>(
  refetch: () => Promise<T>,
  skipFirst = true
) {
  const firstTimeRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      if (firstTimeRef.current && skipFirst) {
        firstTimeRef.current = false;
        return;
      }

      refetch();
    }, [refetch, skipFirst])
  );
}
