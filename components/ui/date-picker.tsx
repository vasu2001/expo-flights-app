import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import DateTimePicker, {
  DateType,
  useDefaultClassNames,
} from "react-native-ui-datepicker";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Text } from "./text";
import { Button } from "./button";
import { cn } from "~/lib/utils";
import { CalendarIcon } from "lucide-react-native";
import moment, { Moment } from "moment";

interface DatePickerProps {
  value?: string;
  onValueChange?: (date: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  minDate?: string | null;
}

const DATE_FORMAT = "YYYY-MM-DD";

// Helper to convert any input to a moment object, or undefined
const toMoment = (date: DateType): Moment | undefined => {
  if (!date) return undefined;
  if (moment.isMoment(date)) return date;
  if (date instanceof Date) return moment(date);
  if (typeof date === "string" || typeof date === "number") {
    const m = moment(date);
    return m.isValid() ? m : undefined;
  }
  // fallback for Dayjs or other objects with toDate
  if (typeof date === "object" && typeof date.toDate === "function") {
    return moment(date.toDate());
  }
  return undefined;
};

// Helper to convert moment to DateType for DateTimePicker
const momentToDateType = (m: Moment | undefined): DateType => {
  if (!m) return undefined;
  return m.toDate();
};

export const DatePicker = ({
  value,
  onValueChange,
  placeholder = "Select date",
  className,
  disabled = false,
  minDate,
}: DatePickerProps) => {
  const [selectedMoment, setSelectedMoment] = useState<Moment | undefined>(
    value ? toMoment(value) : undefined
  );
  const defaultClassNames = useDefaultClassNames();

  const handleDateSelect = (params: { date: DateType }) => {
    const m = toMoment(params.date);
    setSelectedMoment(m);

    if (m && m.isValid()) {
      onValueChange?.(m.format(DATE_FORMAT));
    }
  };

  const formatDisplayDate = (m: Moment | undefined) => {
    if (!m || !m.isValid()) return "";
    return m.format(DATE_FORMAT);
  };

  const pickerDate = momentToDateType(selectedMoment);

  const minMoment = minDate ? toMoment(minDate) : moment();
  const pickerMinDate = momentToDateType(minMoment);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <TouchableOpacity
          className={cn(
            "flex-row items-center justify-between px-3 py-2 border border-border rounded-md bg-background",
            disabled && "opacity-50",
            className
          )}
          disabled={disabled}
        >
          <Text
            className={
              selectedMoment ? "text-foreground" : "text-muted-foreground"
            }
          >
            {selectedMoment ? formatDisplayDate(selectedMoment) : placeholder}
          </Text>
          <CalendarIcon size={16} className="text-muted-foreground" />
        </TouchableOpacity>
      </PopoverTrigger>

      <PopoverContent className="w-80 p-0">
        <View className="p-4 border-b border-border">
          <Text className="text-lg font-semibold text-foreground">
            Select Date
          </Text>
        </View>

        <View className="p-4">
          <DateTimePicker
            mode="single"
            date={pickerDate}
            onChange={handleDateSelect}
            classNames={{
              ...defaultClassNames,
              today: "border-primary border-2",
              selected: "bg-primary border-primary",
              selected_label: "text-primary-foreground font-semibold",
              day: `${defaultClassNames.day} hover:bg-muted`,
              disabled: "opacity-50",
            }}
            minDate={pickerMinDate}
          />
        </View>

        <View className="flex-row gap-2 p-4 border-t border-border">
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex-1">
              <Text>Close</Text>
            </Button>
          </PopoverTrigger>
        </View>
      </PopoverContent>
    </Popover>
  );
};
