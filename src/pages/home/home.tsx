import React from "React";

import {
  Flex,
  Avatar,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  HStack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export function HomeComponent() {
  return (
    <Flex bg="#202024" height="100vh" flexDirection="column">
      <Flex
        align="center"
        justify="flex-end"
        height="106px"
        width="100%"
        paddingRight="52px"
      >
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
      </Flex>

      <Flex justify="center">
        <Text fontSize="120px" color="white">
          Google
        </Text>
      </Flex>

      <Flex justify="center" mt="52px">
        <Flex width="905px">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              // eslint-disable-next-line react/no-children-prop
              children={<Search2Icon color="white" />}
            />
            <Input type="tel" placeholder="Phone number" borderRadius="40px" />
          </InputGroup>
        </Flex>
      </Flex>

      <Flex justify="center" mt="52px">
          <HStack spacing="32px">
        <Flex> 
          <Button bg="#303034" color="white">Pesquisa Google</Button>
        </Flex>
        <Flex>
          <Button bg="#303034" color="white">Estou com sorte</Button>
        </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
}
