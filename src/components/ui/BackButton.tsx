import { IconButton, chakra } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

const ChevronLeftIcon = chakra(BiArrowBack);

const BACK_LABEL = "Back";

const BackButton = () => {
  const router = useRouter();
  return (
    <IconButton
      onClick={() => router.back()}
      aria-label={BACK_LABEL}
      icon={<ChevronLeftIcon fontSize="1.7rem" color="primary.dark" />}
      colorScheme="primary"
      variant="ghost"
      size="md"
      _hover={{ bg: "primary.background" }}
      transition="all 0.3s ease-in-out"
    />
  );
};

export default BackButton;
