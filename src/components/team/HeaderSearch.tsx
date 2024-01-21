import { Input, InputGroup, InputLeftElement, chakra } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { type ChangeEventHandler } from "react";
import { RiSearchLine } from "react-icons/ri";
import { throttle } from "~/utilities/rate-limiting";

const SearchIcon = chakra(RiSearchLine);

type Props = {
  placeholder?: string;
};

const UserSearch = ({ placeholder }: Props) => {
  const router = useRouter();
  const handleChange: ChangeEventHandler<HTMLInputElement> = throttle((e) => {
    const query = e.target.value;
    router.replace({ query: { ...router.query, search: query } });
  }, 1000);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon fontSize="1.25rem" mb={1} mr={1} />
      </InputLeftElement>
      <Input
        outlineColor="black"
        borderRadius="xl"
        onChange={handleChange}
        placeholder={placeholder}
        defaultValue={router.query.search}
        size="sm"
        w="100%"
        maxW={60}
      />
    </InputGroup>
  );
};

export default UserSearch;
