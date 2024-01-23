import {
  Input,
  type InputProps,
  chakra,
  InputGroup,
  InputRightElement,
  useDisclosure,
  IconButton,
  useOutsideClick,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverBody,
  Button,
  Text,
} from "@chakra-ui/react";
import {
  useState,
  useCallback,
  type ChangeEventHandler,
  type ReactNode,
  useRef,
} from "react";

import { BiChevronDown } from "react-icons/bi";

const ChevronDownIcon = chakra(BiChevronDown);

export type OptionInit = {
  label: string;
  value: string;
};

type FilteredOptionsProps = {
  options: OptionInit[];
  search: string;
  onOptionClick: (option: OptionInit) => void;
  isServerFiltered: boolean;
  totalOptions?: number;
};

const FilteredOptions = ({
  options,
  search,
  onOptionClick,
  isServerFiltered,
  totalOptions,
}: FilteredOptionsProps) => {
  const filteredOptions = isServerFiltered
    ? options
    : options.filter(({ label }) =>
        label.toLowerCase().includes(search.toLowerCase())
      );
  const hiddenOptionsCount = Math.max(
    0,
    (totalOptions ?? filteredOptions.length) - 5
  );
  return (
    <>
      {filteredOptions.slice(0, 5).map((option) => (
        <Button
          w="100%"
          variant="ghost"
          key={option.value}
          onClick={() => onOptionClick(option)}
        >
          {option.label}
        </Button>
      ))}
      {hiddenOptionsCount > 0 && (
        <Text fontSize="sm" textAlign="right" w="100%">
          + {hiddenOptionsCount} more
        </Text>
      )}
    </>
  );
};

export type AutoCompleteProps = Omit<InputProps, "onChange"> & {
  extraElement?: ReactNode;
  options: OptionInit[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  onInputChange?: ChangeEventHandler<HTMLInputElement>;
  isServerFiltered?: boolean;
  totalOptions?: number;
};

const AutoComplete = ({
  extraElement,
  options,
  onChange,
  onInputChange,
  defaultValue = "",
  placeholder,
  isServerFiltered = false,
  totalOptions,
  ...props
}: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);
  const menuListRef = useRef<HTMLDivElement>(null);
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setInputValue(e.target.value);
      onInputChange && onInputChange(e);
    },
    [onInputChange]
  );
  useOutsideClick({
    ref: menuListRef,
    handler: onClose,
    enabled: isOpen,
  });

  const onOptionClick = useCallback(
    (option: OptionInit) => {
      onChange && onChange(option.value);
      onClose();
      setInputValue(option.label);
    },
    [onChange, onClose, setInputValue]
  );

  return (
    <>
      <Popover
        isOpen={isOpen}
        autoFocus={false}
        onClose={onClose}
        matchWidth
        placement="bottom"
      >
        <PopoverAnchor>
          <Input
            onChange={handleInputChange}
            {...props}
            value={inputValue}
            placeholder={placeholder}
            onFocus={onOpen}
            ref={inputRef}
            role="search"
          />
        </PopoverAnchor>
        <PopoverContent>
          <PopoverBody m={0}>
            <FilteredOptions
              options={options}
              search={inputValue}
              onOptionClick={onOptionClick}
              isServerFiltered={isServerFiltered}
              totalOptions={totalOptions}
            />
            {extraElement}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default AutoComplete;
