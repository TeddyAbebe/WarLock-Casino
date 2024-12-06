import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectComponentProps {
  options: { label: string; value: string }[]; // Array of options
  placeholder?: string; // Placeholder text
  label?: string; // Optional group label
  className?: string; // Custom className for SelectTrigger
  onChange?: (value: string) => void; // Callback for value change
}

export const SelectComponent: React.FC<SelectComponentProps> = ({
  options,
  placeholder,
  label,
  className = "w-[70px]",
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(
    placeholder ? undefined : options[0]?.value
  );

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Select onValueChange={handleValueChange} value={selectedValue}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder || options[0]?.label} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
