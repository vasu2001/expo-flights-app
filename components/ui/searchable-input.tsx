import * as React from "react";
import { View, ScrollView, TextInput } from "react-native";
import { Input } from "./input";
import { Text } from "./text";
import { Button } from "./button";
import { cn } from "~/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { ChevronDown } from "~/lib/icons/ChevronDown";
import { Label } from "./label";

export interface SearchableInputOption {
  value: string;
  label: string;
  description?: string;
}

interface SearchableInputProps {
  placeholder?: string;
  selectedValue?: string;
  selectedLabel?: string;
  onSearchChange?: (query: string) => void;
  onSelect?: (option: SearchableInputOption) => void;
  options: SearchableInputOption[];
  className?: string;
  disabled?: boolean;
  label?: string;
  loading?: boolean;
  error?: string;
}

export function SearchableInput({
  placeholder,
  selectedValue,
  selectedLabel,
  onSearchChange,
  onSelect,
  options,
  className,
  disabled,
  label,
  loading,
  error,
}: SearchableInputProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    onSearchChange?.(text);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleSelectOption = (option: SearchableInputOption) => {
    setIsOpen(false);
    onSelect?.(option);
  };

  const handleTriggerPress = () => {
    if (!disabled) {
      setIsOpen(true);
      // Focus the input when dropdown opens
      // Note: Auto-focus removed due to ref issues
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearchChange?.("");
  };

  const displayValue = selectedLabel || selectedValue || "";

  return (
    <View className={cn("relative", className)}>
      <Label>{label}</Label>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            onPress={handleTriggerPress}
            disabled={disabled}
            className={cn(
              "w-full justify-between",
              !displayValue && "text-muted-foreground"
            )}
          >
            <Text className="truncate">
              {displayValue || placeholder || "Select an option"}
            </Text>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-[80vw] min-w-[300px] max-h-60">
          <View className="p-2 border-b border-border">
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChangeText={handleSearchChange}
              className="w-full"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onPress={handleClear}
                className="absolute right-2 top-2 h-6 w-6 p-0"
              >
                <Text className="text-muted-foreground">×</Text>
              </Button>
            )}
          </View>

          <ScrollView className="max-h-48" showsVerticalScrollIndicator={false}>
            {loading ? (
              <View className="p-4">
                <Text className="text-center text-muted-foreground">
                  Loading...
                </Text>
              </View>
            ) : options.length > 0 ? (
              options.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onPress={() => handleSelectOption(option)}
                  className="flex-col items-start p-3"
                >
                  <Text className="font-medium text-foreground">
                    {option.label}
                  </Text>
                  {option.description && (
                    <Text className="text-sm text-muted-foreground mt-0">
                      {option.description}
                    </Text>
                  )}
                </DropdownMenuItem>
              ))
            ) : searchQuery ? (
              <View className="p-4">
                <Text className="text-center text-muted-foreground">
                  No results found for "{searchQuery}"
                </Text>
              </View>
            ) : (
              <View className="p-4">
                <Text className="text-center text-muted-foreground">
                  Start typing to search...
                </Text>
              </View>
            )}
          </ScrollView>
        </DropdownMenuContent>
      </DropdownMenu>

      {error && <Text className="text-sm text-destructive mt-1">{error}</Text>}
    </View>
  );
}
