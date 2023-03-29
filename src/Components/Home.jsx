import { Box,Text,Flex, Button,SimpleGrid,
    Center,
    Stack,
    List,
    ListItem,
    ListIcon,
    useColorModeValue,} from '@chakra-ui/react'
    import { CheckIcon } from '@chakra-ui/icons'
import React from 'react'

export const Home = () => {
  return (
    <Box>
        <Text
        m="auto"
        color="gray"
        mb="3px"
        textAlign="center"
        fontWeight="600"
        letterSpacing="-0.02em"
        w="240px"
        h="19px"
        mt="93px"
        fontSize="16px"
        lineHeight="19px"
      >
        WELCOME TO CREATIVE PROXIES
      </Text>

        {/* sec */}
<Flex fontSize="56px" w="824px" fontWeight="600" lineHeight="67.2px" letterSpacing="-2%" m="auto">
<Text>We are the </Text>
<Text ml="10px" color="#077BFF"> Fastest </Text>
<Text ml="10px"> and the </Text>
<Text ml="10px" color={"#16D113"}>Most</Text>
</Flex>
<Flex fontSize="56px" w="834px" fontWeight="600" lineHeight="67.2px" letterSpacing="-2%" m="auto">
<Text color={"#16D113"}>Reliable </Text> 
<Text ml="10px"> Proxy Service since 2020</Text>
</Flex>

{/* lorem */}
<Text
        m="auto"
        color="#111822"
        mb="3px"
        textAlign="center"
        fontWeight="500"
        letterSpacing="-0.02em"
        w="509px"
        h="52px"
        opacity="50%"
        mt="17px"
        fontSize="22px"
        lineHeight="26.4px"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. in luctus augue sit amet mollis molestie.
      </Text>

{/* getstartbutton */}
<Button p="10px" w="222px" h="47px" borderRadius="10px" gap="5px" backgroundColor="#077BFF" color="white" mt="26px">
    Getstart --
</Button>


<Box m="auto" w="222px" h="91px" pt="5px" mt="27px" backgroundColor="rgba(0, 182, 122, 0.1)" borderRadius="5px">
<Box w="151px" h="28.31px"  m="auto" mb="3px" mt="16px" >
    <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg" alt="" /></Box>
    <Box m="auto" mb="3px" w="210px"  mt="-26px"><img src="https://uploads-ssl.webflow.com/628ca7512a3d4b82cd74bf49/6295bd5d9b041d03de2738a2_mine-trustpilot-badge.png" alt="" /></Box>
</Box>

{/* line */}
<Box w="588px" borderBottom="1px solid #D9D8D6"  m="auto" mt="54px" mb="36.36"></Box>


<SimpleGrid columns={{base:2,md:2,lg:4}}  w="1192px" h="96px"  m="auto" gap="10px" >
    <Flex w="285.84px" h="95.28px" border="1px solid #D4EAE8" backgroundColor="#D4EAE8" borderRadius="5px" p="25px">
        <img src="https://ps.w.org/siteorigin-panels/assets/icon-256x256.png?rev=2556869" alt="" />
        <Text fontWeight="400" fontSize='xl' letterSpacing="-2%" ml="10px" lineHeight="21.6px">Lorem Ipsum <br /> dolor Sit Amet Top</Text>
    </Flex>
    <Flex w="285.84px" h="95.28px" border="1px solid #D4EAE8" backgroundColor="#D4EAE8" borderRadius="5px" p="25px">
        <img src="https://user-images.githubusercontent.com/104376252/228521119-785b627f-d726-465b-a5e0-fb72b9143c8f.png" alt="" />
        <Text fontWeight="400" fontSize='xl' letterSpacing="-2%" ml="10px" lineHeight="21.6px">Lorem Ipsum <br /> dolor Sit Amet Top</Text>
    </Flex>

    <Flex w="285.84px" h="95.28px" border="1px solid #D4EAE8" backgroundColor="#D4EAE8" borderRadius="5px" p="25px" mb="138.36">
        <img src="https://user-images.githubusercontent.com/104376252/228522188-393e01f6-34ca-4d17-b1c0-d9ecb268788c.png" alt="" />
        <Text fontWeight="400" fontSize='xl' letterSpacing="-2%" ml="10px" lineHeight="21.6px">Lorem Ipsum <br /> dolor Sit Amet Top</Text>
    </Flex>

    <Flex w="285.84px" h="95.28px" border="1px solid #D4EAE8" backgroundColor="#D4EAE8" borderRadius="5px" p="25px">
        <img src="https://user-images.githubusercontent.com/104376252/228523259-7af57970-59cb-4bdf-802a-8572994450bd.png" alt="" />
        <Text fontWeight="400" fontSize='xl' letterSpacing="-2%" ml="10px" lineHeight="21.6px">Lorem Ipsum <br /> dolor Sit Amet Top</Text>
    </Flex>
     </SimpleGrid>

     {/* Bluebox */}
     <Box  w="100%" backgroundColor="#0566D4" mt="136.6" pb="114px">
        <Text w="578px" h="43px" color="#FFFFFF" letterSpacing="-2%" fontWeight="600" fontSize="28px" lineHeight="43.2px" m="auto" pt="115px">Why we are the Best Proxy Providers</Text>
        <Text w="465px" h="44px" fontSize="18px" color="#FFFFFF" fontWeight="500" lineHeight="21.6px" letterSpacing="-2%" m="auto" mt="40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>

        <SimpleGrid w="1192px" columns={{base:1,md:2,lg:4}} m="auto" mt="30px" gap="16px" >
        <Box border="1px solid #FFFFFF" borderRadius="5px" w="286px" h="160px" color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228532232-5e658e49-09e2-415e-935e-4f0856857663.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize="20px" lineHeight="24px" letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 1</Text>
        <Text fontWeight="400" fontSize="14px" lineHeight="16.8px" letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>

        <Box border="1px solid #FFFFFF" borderRadius="5px" w="286px" h="160px" color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228536163-802ba2bd-029f-468f-8d49-d837df11315a.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize="20px" lineHeight="24px" letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 2</Text>
        <Text fontWeight="400" fontSize="14px" lineHeight="16.8px" letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>


        <Box border="1px solid #FFFFFF" borderRadius="5px" w="286px" h="160px" color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228536817-d3abd6b8-4b1e-4f7c-bb48-636d0a238f84.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize="20px" lineHeight="24px" letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 3</Text>
        <Text fontWeight="400" fontSize="14px" lineHeight="16.8px" letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>

        <Box border="1px solid #FFFFFF" borderRadius="5px" w="286px" h="160px" color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228537519-773cc8f7-def0-4e4e-a95f-a05aa0360034.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize="20px" lineHeight="24px" letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 4</Text>
        <Text fontWeight="400" fontSize="14px" lineHeight="16.8px" letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>

        <Box border="1px solid #FFFFFF" borderRadius="5px" w="286px" h="160px" color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228538253-bc8dcda7-0296-4a88-b294-5a6f7322f5a6.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize="20px" lineHeight="24px" letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 5</Text>
        <Text fontWeight="400" fontSize="14px" lineHeight="16.8px" letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>

        <Box border="1px solid #FFFFFF" borderRadius="5px" w="286px" h="160px" color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228538783-3731e28b-1e41-4f49-8c3b-78a6546fc692.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize="20px" lineHeight="24px" letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 6</Text>
        <Text fontWeight="400" fontSize="14px" lineHeight="16.8px" letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>

        <Box border="1px solid #FFFFFF" borderRadius="5px" w="286px" h="160px" color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228539429-455230db-4232-42fc-b9f0-0f758a9f4882.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize="20px" lineHeight="24px" letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 7</Text>
        <Text fontWeight="400" fontSize="14px" lineHeight="16.8px" letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>

        <Box border="1px solid #FFFFFF" borderRadius="5px" w="286px" h="160px" color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228540265-535c194b-5ebb-4253-8950-acdb75603b69.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize="20px" lineHeight="24px" letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 8</Text>
        <Text fontWeight="400" fontSize="14px" lineHeight="16.8px" letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>
        </SimpleGrid>
     </Box>




    <Box  w="465px" h="97px" gap="10px" m="auto" mt="177px" pb="141px">
        <Flex m="auto">
        <Text fontSize="36px" lineHeight="43.2px" letterSpacing="-2%" fontWeight="600" pl="46px" >You choose, we </Text> <Text fontSize="36px" lineHeight="43.2px" letterSpacing="-2%" fontWeight="600" ml="10px" color="#077BFF">Deliver!</Text> </Flex>
        <Text fontSize="18px" lineHeight="21.6px" letterSpacing="-2%" fontWeight="500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
    </Box>


      
<SimpleGrid columns={{base:1,md:1,lg:2}} m="auto" gap="30px" w="700px" mt="-50px">
        <Box bg={useColorModeValue('gray.50', 'gray.900')} backgroundColor="white" px={6} py={10} w="344px" h="500px" border="1px solid #1E1E1E" borderRadius="5px" m="auto" >
        <Box><img  src="https://user-images.githubusercontent.com/104376252/228555456-d0ffa362-5db9-4eab-b1bf-188582329834.png" alt="" /></Box>

          <List spacing={3} align="left">
          <ListItem>
              <ListIcon color="gray" fontSize="16px" lineHeight="19.2px" letterSpacing="-2%" fontWeight="400" />
              Plan Include :
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="blue" />
              100 mreds
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="blue" />
              Dedicated IP Pool
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="blue" />
              Residential Proxy
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="blue" />
             Unlimited Bandwidth
            </ListItem>

            <ListItem>
              <ListIcon as={CheckIcon} color="blue" />
             Worldwide Locationa
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="blue" />
             40 GBps
            </ListItem>
          </List>

          <Button
            mt={10}
            w={'full'}
            bg={'#077BFF'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'blue',
            }}
            _focus={{
              bg: '#077BFF',
            }}>
            view pricing
          </Button>
        </Box>
     
        <Box bg={useColorModeValue('gray.50', 'gray.900')} backgroundColor="rgba(22, 209, 19, 0.1)" px={6} py={10} w="344px" h="600px"  border="1px solid #1E1E1E" borderRadius="5px" m="auto" mt="100px">
        <Box><img  src="https://user-images.githubusercontent.com/104376252/228562441-24c1ffc2-0fdd-404e-8d63-02ce5b879bd8.png" alt="" /></Box>

          <List spacing={3} align="left">
          <ListItem>
              <ListIcon color="gray" fontSize="16px" lineHeight="19.2px" letterSpacing="-2%" fontWeight="400" />
              Plan Include :
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="blue" />
              100 mreds
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="blue" />
              Dedicated IP Pool
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="blue" />
              Residential Proxy
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="blue" />
             Unlimited Bandwidth
            </ListItem>

            <ListItem>
              <ListIcon as={CheckIcon} color="blue" />
             Worldwide Locationa
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="blue" />
             Dedicated Subnets
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green" />
             Dedicated Subnets
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green" />
             1 Octilion IPS
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green" />
             Septilition per Location
            </ListItem>
          </List>

          <Button
            mt={10}
            w={'full'}
            bg={'#2CE517'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: '#2CE517',
            }}
            _focus={{
              bg: '#2CE517',
            }}>
            view pricing
          </Button>
        </Box>
     
</SimpleGrid>

<Flex w="708px" h="142px" borderRadius="5px" m="auto" mt="21px" border="1px solid #1E1E1E"
>
    <Box w="161px" h="99px" p="11px" mr="20px">
        <img src="https://user-images.githubusercontent.com/104376252/228572288-904027bc-5e1a-475f-8563-9f29135a0ff3.png" alt="" />
    </Box>
    <Box w="161px" h="99px" pt="21.5px">
        <List>
        <Text color="gray">Plan Includes</Text>
    <ListItem fontSize="16px" lineHeight="19.2px" fontWeight="400px">
              <ListIcon as={CheckIcon} color="blue"  />
              Whitelable IP Pool
            </ListItem>
            <ListItem fontSize="16px" lineHeight="19.2px" fontWeight="400px">
              <ListIcon as={CheckIcon} color="blue" />
              Whitelable Subnets
            </ListItem>
            <ListItem fontSize="16px" lineHeight="19.2px" fontWeight="400px">
              <ListIcon as={CheckIcon} color="blue" />
              Residential Proxy
            </ListItem> 
            </List>
    </Box>
    <Box w="161px" h="99px" pt="44.5px" ml="40px">
        <List>
    <ListItem fontSize="16px" lineHeight="19.2px" fontWeight="400px">
              <ListIcon as={CheckIcon} color="blue"  />
              Custom Bandwidth
            </ListItem>
            <ListItem fontSize="16px" lineHeight="19.2px" fontWeight="400px">
              <ListIcon as={CheckIcon} color="blue" />
              Priority Support
            </ListItem>
            </List>
    </Box>
</Flex>

{/* feedback */}


</Box>
  )
}
