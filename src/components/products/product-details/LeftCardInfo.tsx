import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

type Props = {
  image: string | undefined;
  name: string | undefined;
  hash_name: string | undefined;
  sum: number | null | undefined;
  count: number | null | undefined;
};

const LeftCardInfo = ({ image, name, hash_name, sum, count }: Props) => {
  return (
    <HStack flexDirection="column" gap={0} height="100%">
      <Box position="relative" height="100%">
        <Image borderTopRadius="30" src={image} alt={name} width="100%" />
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          height="300px"
          bgGradient="linear(to-r, secondary.main, accent.hover)"
          borderBottomRadius="30"
          color="primary.background"
          textAlign="center"
        >
          <Heading mt={10} fontSize="1.3rem">
            {name}
          </Heading>
          <Text fontSize="0.8rem" mt={3}>
            {hash_name}
          </Text>
          <Grid
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(2, 1fr)"
            width="100%"
            margin="auto"
            alignItems="center"
            gap={3}
            mt={7}
          >
            <GridItem
              colSpan={2}
              ml="auto"
              textAlign="end"
              bgColor="primary.background"
              border="2px"
              display="inline"
              px={7}
              borderRadius="30"
              w="fit-content"
            >
              <Text
                fontWeight={800}
                bgGradient="linear(to-l, secondary.main, accent.hover)"
                bgClip="text"
              >
                {sum ?? "0"}
              </Text>
            </GridItem>
            <GridItem colSpan={3} textAlign="start" fontWeight={500}>
              completed orders
            </GridItem>
            <GridItem
              colSpan={2}
              ml="auto"
              bgColor="primary.background"
              border="2px"
              display="inline"
              px={7}
              borderRadius="30"
              w="fit-content"
            >
              <Text
                fontWeight={800}
                bgGradient="linear(to-l, secondary.main, accent.hover)"
                bgClip="text"
              >
                {count ?? "0"}
              </Text>
            </GridItem>
            <GridItem colSpan={3} textAlign="start" fontWeight={500}>
              pending orders
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </HStack>
  );
};

export default LeftCardInfo;
