import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { type ChangeEventHandler } from "react";
import { RiSearchLine } from "react-icons/ri";
import { throttle } from "~/utilities/rate-limiting";

const UserSearch = () => {
  const router = useRouter();
  const handleChange: ChangeEventHandler<HTMLInputElement> = throttle((e) => {
    const query = e.target.value;
    router.replace({ query: { search: query } });
  }, 1000);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <RiSearchLine />
      </InputLeftElement>
      <Input
        onChange={handleChange}
        placeholder="Search for someone"
        defaultValue={router.query.search}
        size="sm"
        w="100%"
        maxW={60}
      />
    </InputGroup>
  );
};

export default UserSearch;
