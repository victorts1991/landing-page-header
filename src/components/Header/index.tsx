import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Link,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

var links:string[];
links = ['Features', 'Pricing', 'Blog'] 

const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleToggle = () => (isOpen ? onClose() : onOpen())

  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Logo
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        { isOpen ? <CloseIcon cursor="pointer" /> : <HamburgerIcon cursor="pointer" /> }
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        {
            links.map((value, index) => 
                <Link 
                    key={index} 
                    href="#" 
                    _hover={{ textDecoration: 'none' }}
                >
                    <Text
                        p="2"
                        borderRadius="5"
                        _hover={{ textDecoration: 'none', bg: "teal.700" }}
                    >{value}</Text>
                </Link>
            )
        }
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Create account
        </Button>
      </Box>
    </Flex>
  );
};

export default Header
