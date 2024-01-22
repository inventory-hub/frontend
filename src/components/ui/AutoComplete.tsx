import {
  Input,
  type InputProps,
  chakra,
  InputGroup,
  InputRightElement,
  Menu,
  MenuList,
  MenuItem,
  useDisclosure,
  MenuDivider,
  IconButton,
  useOutsideClick,
} from "@chakra-ui/react";
import {
  useState,
  useCallback,
  useMemo,
  type ChangeEventHandler,
  type ReactNode,
  useRef,
} from "react";

import { BiChevronDown } from "react-icons/bi";

const ChevronDownIcon = chakra(BiChevronDown);

type Props = Omit<InputProps, "onChange"> & {
  extraElement?: ReactNode;
  options: {
    label: string;
    value: string;
  }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  onInputChange?: ChangeEventHandler<HTMLInputElement>;
};

const AutoComplete = ({
  extraElement,
  options,
  onChange,
  onInputChange,
  defaultValue = "",
  placeholder,
  ...props
}: Props) => {
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

  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [inputValue, options]
  );

  return (
    <>
      <InputGroup>
        <Input
          onChange={handleInputChange}
          {...props}
          value={inputValue}
          placeholder={placeholder}
          onFocus={onOpen}
          ref={inputRef}
        />
        <InputRightElement>
          <IconButton variant="ghost" aria-label="Toggle suggestions">
            {!isOpen && <ChevronDownIcon size="1rem" onClick={onOpen} />}
          </IconButton>
        </InputRightElement>
      </InputGroup>
      <Menu isOpen={isOpen}>
        <MenuList mt="4.5rem" w="22rem">
          {filteredOptions.map((option) => (
            <MenuItem
              key={option.value}
              onClick={() => {
                onChange && onChange(option.value);
                onClose();
                setInputValue(option.label);
              }}
            >
              {option.label}
            </MenuItem>
          ))}
          {extraElement && (
            <>
              <MenuDivider />
              <MenuItem p={0}>{extraElement}</MenuItem>
            </>
          )}
        </MenuList>
      </Menu>
    </>
  );
};

export default AutoComplete;
