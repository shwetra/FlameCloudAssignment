import { Box, Flex, Heading, Text, HStack } from "@chakra-ui/react";
import React from "react";

export const Locationcheck = () => {
  return (
    <Box>
      <Text
        m="auto"
        color="gray"
        mb="3px"
        textAlign="center"
        fontWeight="600"
        letterSpacing="-0.02em"
        w="210px"
        h="19px"
        mt="93px"
        fontSize="16px"
        lineHeight="19px"
      >
        PROXY LOCATION CHECKER
      </Text>
      <Flex h="134px" m="auto">
        <Heading
          m="auto"
          w="740px"
          fontSize="56px"
          lineHeight="67.2px"
          letterSpacing="-2%"
        >
          Check Locations of all your Proxies Free of Cost{" "}
        </Heading>
      </Flex>
      <Text
        m="auto"
        color="gray"
        mb="3px"
        textAlign="center"
        fontWeight="500"
        letterSpacing="-2%"
        w="509px"
        h="52px"
        mt="17px"
        fontSize="22px"
        lineHeight="26.4px"
      >
        To Check location, enter the address or proxies you want to check (1 IP
        Per line)
      </Text>

      <Box
        mt="42px"
        border="3px solid rgba(0, 0, 0, 0.25)"
        borderRadius="5PX"
        backgroundColor="rgba(217, 216, 214, 0.25)"
        w="708px"
        h="169px"
        m="auto"
      >
        <Box>
          <Heading
            textAlign="start"
            p="10px"
            fontSize="18px"
            fontWeight="500"
            lineHeight="21.6px"
            letterSpacing="-2%"
          >
            8.8.8.8
          </Heading>
          <Heading
            fontSize="18px"
            textAlign="start"
            pl="10px"
            fontWeight="500"
            lineHeight="21.6px"
            letterSpacing="-2%"
          >
            1.1.1.1
          </Heading>
          <Heading
            fontSize="18px"
            textAlign="start"
            p="10px"
            fontWeight="500"
            lineHeight="21.6px"
            letterSpacing="-2%"
          >
            192.168.1.1
          </Heading>
        </Box>
      </Box>




      <Flex 
        w="708px"
        h="60px"
        m="auto"
        mt="21px"
        justifyContent="space-between"
        >
        <Box borderRadius="5PX" backgroundColor="#077BFF"  w="212px" h="39px">Check Location</Box>
        <Box mr="14px" w="247px" h="34px" color="gray" fontWeight="400" fontSize="14px" lineHeight="17px" letterSpacing="-0.022em">By using our tool, you agree our Terms of Service and Privacy Policy</Box>
      </Flex>
{/* result */}
      <Box m="auto" textAlign="left" pl="10px"  w="708px" h="24px" color="blue">Your Results</Box>

      {/* sec */}
      <Box
        mt="42px"
        border="3px solid rgba(0, 0, 0, 0.25)"
        borderRadius="5PX"
        w="708px"
        h="166px"
        m="auto"
      >
        <Flex backgroundColor="rgba(217, 216, 214, 0.25)"
        borderBottom="3px solid rgba(0, 0, 0, 0.25)"
        h="40px"
        w="704px"
        justifyContent="space-around"
        
        ><Text>IP</Text>
          <Text>PROXY</Text>
        <Text>CITY</Text>
        <Text>COUNTRY</Text>
         
        </Flex>
        <Flex
        borderBottom="1px solid rgba(0, 0, 0, 0.25)"
        h="40px"
        w="704px"
        justifyContent="space-around"
        
        ><Text>8.8.8.8</Text>
          <Text>192.168.0.0</Text>
        <Text>New York</Text>
        <Text>US</Text>
         
        </Flex>
        <Flex 
        borderBottom="1px solid rgba(0, 0, 0, 0.25)"
        h="40px"
        w="704px"
        justifyContent="space-around"
        
        ><Text>1.1.1.1</Text>
          <Text ml="10px">192.168.0.0</Text>
        <Text>Los Angeles</Text>
        <Text>US</Text>
         
        </Flex>
        <Flex 
        borderBottom="1px solid rgba(0, 0, 0, 0.25)"
        h="40px"
        w="704px"
        justifyContent="space-around"
        
        ><Text>192.168.1.1</Text>
          <Text mr="32px">192.168.0.0</Text>
        <Text mr="20px" >San Diego</Text>
        <Text>US</Text>
         
        </Flex>
      </Box>

      {/* last */}
      <Flex  w ="428px" m="auto" h="24px" mb="98px">
        <Text mr="10px" mt="39px" fontSize="18px">Check out Compatibility Checker </Text>
        <Text mt="39px" fontSize="18px" color="blue"> View Tool</Text>
      </Flex>
      
    </Box>
  );
};
