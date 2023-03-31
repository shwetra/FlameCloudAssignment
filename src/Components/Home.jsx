import { Box,Text,Flex, Button,SimpleGrid,
    Center,
    Stack,
    List,
    ListItem,
    ListIcon,
    useColorModeValue,
    Image,} from '@chakra-ui/react'
    import { CheckIcon } from '@chakra-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate=useNavigate()

  function handle(){
    navigate("/locationcheck")
  }
  return (
    <Box mb="120px">
        <Text
        m="auto"
        color="gray"
        mb="3px"
        textAlign="center"
        fontWeight="600"
        letterSpacing="-0.02em"
        w={{base:"1080px",lg:"240px"}}
        h="19px"
        mt="93px"
        fontSize={{base:'40px',lg:"16px"}}
        lineHeight="19px"
      >
        WELCOME TO CREATIVE PROXIES
      </Text>

        {/* sec */}
<Flex fontSize={{base:"76px",lg:"56px"}}  w={{base:"1080px",lg:"824px"}} fontWeight="600" lineHeight={{base:'103.2px',lg:"67.2px"}} letterSpacing="-2%" m="auto" ml={{base:"30px",lg:"auto"}}>
<Text>We are the </Text>
<Text ml="10px" color="#077BFF"> Fastest </Text>
<Text ml="10px"> and the </Text>
<Text ml="10px" color={"#16D113"}>Most</Text>
</Flex>
<Flex fontSize={{base:"72px",lg:"56px"}}  w={{base:"1080px",lg:"834px"}} fontWeight="600" lineHeight="67.2px" letterSpacing="-2%" m="auto" ml={{base:"30px",lg:"auto"}}>
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
        w={{base:"1080px",lg:"509px"}}
        h="52px"
        opacity="50%"
        mt="17px"
        fontSize={{base:'40px',lg:"22px"}}
        lineHeight={{base:"40px",lg:"26.4px"}}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. in luctus augue sit amet mollis molestie.
      </Text>

{/* getstartbutton */}
<Box w={{base:"1080px",lg:"100%"}}>
<Button onClick={handle} p="10px" w={{base:"460px",lg:"222px"}} h={{base:"97.39px",lg:"47px"}} borderRadius="10px" gap="5px" backgroundColor="#077BFF" fontSize={{base:"37.3px" ,lg:"18px"}} color="white" m="auto" mt={{base:'65.6px',lg:"26px"}}>
    Getstart --
</Button>
</Box>

<Box w={{base:"1080px",lg:"100%"}}>
<Box m={{base:"auto",lg:"auto"}} w={{base:"460px",lg:"222px"}} h={{base:"186.49px",lg:"91px"}} pt="5px" mt={{base:"55.59px",lg:"27px" }} mb={{base:"72px",lg:"0px" }} backgroundColor="rgba(0, 182, 122, 0.1)"  borderRadius={{base:"20px",lg:"5px"}}>
<Box w={{base:"330px",lg:"151px"}} h="28.31px"  m="auto" mb="3px" mt="16px" >
    <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg" alt="" /></Box>
    <Box m="auto" mb="3px" w={{base:"330px",lg:"210px"}}  mt={{base:"28px",lg:"-26px"}}><img src="https://uploads-ssl.webflow.com/628ca7512a3d4b82cd74bf49/6295bd5d9b041d03de2738a2_mine-trustpilot-badge.png" alt="" /></Box>
</Box>
</Box>

{/* line */}
<Box w={{base:"1080px",lg:"588px"}} borderBottom="1px solid #D9D8D6"  m="auto" mt="54px" mb="36.36"></Box>


<SimpleGrid columns={{base:2,md:2,lg:4}}  w={{base:"1180px",lg:"1392px"}} h={{base:"370.84px",lg:"96px"}} m="auto" gap="16px"   pl={{base:"90px"}} pr={{base:"90px"}}>
  
    <Flex w={{base:"437px",lg:"285.84px"}} h={{base:"145.84px",lg:"95.28px"}}  border="1px solid #D4EAE8" backgroundColor="#D4EAE8" borderRadius="5px" p="25px">
        <img src="https://ps.w.org/siteorigin-panels/assets/icon-256x256.png?rev=2556869" alt="" />
        <Text fontWeight="400" fontSize={{base:"27.55px",lg:'xl'}}  lineHeight={{base:"33.06px",lg:"21.6px"}} letterSpacing="-2%" ml="10px">Lorem Ipsum <br /> dolor Sit Amet Top</Text>
    </Flex>
    <Flex w={{base:"437px",lg:"285.84px"}} h={{base:"145.84px",lg:"95.28px"}} border="1px solid #D4EAE8" backgroundColor="#D4EAE8" borderRadius="5px" p="25px">
        <img src="https://user-images.githubusercontent.com/104376252/228521119-785b627f-d726-465b-a5e0-fb72b9143c8f.png" alt="" />
        <Text fontWeight="400" fontSize={{base:"27.55px",lg:'xl'}}  lineHeight={{base:"33.06px",lg:"21.6px"}} letterSpacing="-2%" ml="10px" >Lorem Ipsum <br /> dolor Sit Amet Top</Text>
    </Flex>

    <Flex w={{base:"437px",lg:"285.84px"}} h={{base:"145.84px",lg:"95.28px"}} border="1px solid #D4EAE8" backgroundColor="#D4EAE8" borderRadius="5px" p="25px" mb="138.36">
        <img src="https://user-images.githubusercontent.com/104376252/228522188-393e01f6-34ca-4d17-b1c0-d9ecb268788c.png" alt="" />
        <Text fontWeight="400" fontSize={{base:"27.55px",lg:'xl'}}  lineHeight={{base:"33.06px",lg:"21.6px"}} letterSpacing="-2%" ml="10px" >Lorem Ipsum <br /> dolor Sit Amet Top</Text>
    </Flex>

    <Flex w={{base:"437px",lg:"285.84px"}} h={{base:"145.84px",lg:"95.28px"}} border="1px solid #D4EAE8" backgroundColor="#D4EAE8" borderRadius="5px" p="25px">
        <img src="https://user-images.githubusercontent.com/104376252/228523259-7af57970-59cb-4bdf-802a-8572994450bd.png" alt="" />
        <Text fontWeight="400" fontSize={{base:"27.55px",lg:'xl'}}  lineHeight={{base:"33.06px",lg:"21.6px"}} letterSpacing="-2%" ml="10px" >Lorem Ipsum <br /> dolor Sit Amet Top</Text>
    </Flex>
    
     </SimpleGrid>

     {/* Bluebox */}
     <Box  w={{base:"1180px",lg:"100%"}} pl={{base:"90px"}} pr={{base:"90px"}} backgroundColor="#0566D4" mt="136.6" pb="114px">
        <Text w={{base:"884px",lg:"578px"}} h={{base:"66px",lg:"43px"}} color="#FFFFFF" letterSpacing="-2%" fontWeight="600" fontSize={{base:"50px",lg:"28px"}} pb={{base:"25px"}} lineHeight={{base:"66.12px",lg:"43.2px"}} m="auto" pt="115px">Why we are the Best Proxy Providers</Text>
        <Text w={{base:"711.73px",lg:"465px"}} h="44px" fontSize={{base:"27.55px",lg:"18px"}} color="#FFFFFF" fontWeight="500" lineHeight={{base:"33.06px",lg:"21.6px"}} letterSpacing="-2%" m="auto" mt="40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>

        <SimpleGrid w={{base:"1080px",lg:"1192px"}} columns={{base:2,md:2,lg:4}} m="auto" mt="37.9px" gap="16px" >
        <Box border="1px solid #FFFFFF" borderRadius="5px" w={{base:"437.76px",lg:"286px"}} h={{base:"244.9px",lg:"160px"}} color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228532232-5e658e49-09e2-415e-935e-4f0856857663.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize={{base:"30.61px",lg:"20px"}} lineHeight={{base:"36,73px",lg:"24px"}} letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 1</Text>
        <Text fontWeight="400" fontSize={{base:"21.43px",lg:"14px"}} lineHeight={{base:"25.71px",lg:"16.8px"}} letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>

        <Box border="1px solid #FFFFFF" borderRadius="5px"w={{base:"437.76px",lg:"286px"}} h={{base:"244.9px",lg:"160px"}} color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228536163-802ba2bd-029f-468f-8d49-d837df11315a.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize={{base:"30.61px",lg:"20px"}} lineHeight={{base:"36,73px",lg:"24px"}} letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 2</Text>
        <Text fontWeight="400" fontSize={{base:"21.43px",lg:"14px"}} lineHeight={{base:"25.71px",lg:"16.8px"}} letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>


        <Box border="1px solid #FFFFFF" borderRadius="5px" w={{base:"437.76px",lg:"286px"}} h={{base:"244.9px",lg:"160px"}} color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228536817-d3abd6b8-4b1e-4f7c-bb48-636d0a238f84.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize={{base:"30.61px",lg:"20px"}} lineHeight={{base:"36,73px",lg:"24px"}} letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 3</Text>
        <Text fontWeight="400" fontSize={{base:"21.43px",lg:"14px"}} lineHeight={{base:"25.71px",lg:"16.8px"}} letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>

        <Box border="1px solid #FFFFFF" borderRadius="5px" w={{base:"437.76px",lg:"286px"}} h={{base:"244.9px",lg:"160px"}} color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228537519-773cc8f7-def0-4e4e-a95f-a05aa0360034.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize={{base:"30.61px",lg:"20px"}} lineHeight={{base:"36,73px",lg:"24px"}} letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 4</Text>
        <Text fontWeight="400" fontSize={{base:"21.43px",lg:"14px"}} lineHeight={{base:"25.71px",lg:"16.8px"}} letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>

        <Box border="1px solid #FFFFFF" borderRadius="5px" w={{base:"437.76px",lg:"286px"}} h={{base:"244.9px",lg:"160px"}} color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228538253-bc8dcda7-0296-4a88-b294-5a6f7322f5a6.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize={{base:"30.61px",lg:"20px"}} lineHeight={{base:"36,73px",lg:"24px"}} letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 5</Text>
        <Text fontWeight="400" fontSize={{base:"21.43px",lg:"14px"}} lineHeight={{base:"25.71px",lg:"16.8px"}} letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>

        <Box border="1px solid #FFFFFF" borderRadius="5px" w={{base:"437.76px",lg:"286px"}} h={{base:"244.9px",lg:"160px"}} color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228538783-3731e28b-1e41-4f49-8c3b-78a6546fc692.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize={{base:"30.61px",lg:"20px"}} lineHeight={{base:"36,73px",lg:"24px"}} letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 6</Text>
        <Text fontWeight="400" fontSize={{base:"21.43px",lg:"14px"}} lineHeight={{base:"25.71px",lg:"16.8px"}} letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>

        <Box border="1px solid #FFFFFF" borderRadius="5px" w={{base:"437.76px",lg:"286px"}} h={{base:"244.9px",lg:"160px"}} color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228539429-455230db-4232-42fc-b9f0-0f758a9f4882.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize={{base:"30.61px",lg:"20px"}} lineHeight={{base:"36,73px",lg:"24px"}} letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 7</Text>
        <Text fontWeight="400"fontSize={{base:"21.43px",lg:"14px"}} lineHeight={{base:"25.71px",lg:"16.8px"}} letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>

        <Box border="1px solid #FFFFFF" borderRadius="5px" w={{base:"437.76px",lg:"286px"}} h={{base:"244.9px",lg:"160px"}} color="white" >
            <Box w="35px" mt="23px" ml="25px">
            <img  src="https://user-images.githubusercontent.com/104376252/228540265-535c194b-5ebb-4253-8950-acdb75603b69.png" alt="" />
        </Box>
        <Text fontWeight="600" fontSize={{base:"30.61px",lg:"20px"}} lineHeight={{base:"36,73px",lg:"24px"}} letterSpacing='-2%' color="#FFFFFF" align="left" ml="25px">Feature No 8</Text>
        <Text fontWeight="400" fontSize={{base:"21.43px",lg:"14px"}} lineHeight={{base:"25.71px",lg:"16.8px"}} letterSpacing='-2%' color="#FFFFFF" mt="8px" align="left" ml="25px" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.</Text>
        </Box>
        </SimpleGrid>
     </Box>




    <Box  w={{base:"1080px",lg:"465px"}} h="97px" gap="10px" m="auto" mt={{base:"200px",lg:"133px"}}  mb={{base:"66px",lg:"0px"}}>
        <Flex m="auto"  w={{ base:"766px",lg:"510px"}}>
        <Text fontSize={{base:"59.31px",lg:"36px"}} lineHeight="43.2px" letterSpacing="-2%" fontWeight="600" pl="46px" >You choose, we </Text> <Text fontSize={{base:"59.31px",lg:"36px"}} lineHeight="43.2px" letterSpacing="-2%" fontWeight="600" ml="10px" color="#077BFF">Deliver!</Text> </Flex>
        <Text w={{ base:"766px",lg:"510px"}} m="auto" fontSize={{base:"29.65px",lg:"18px"}} lineHeight={{base:"35.58px",lg:"21.6px"}} letterSpacing="-2%" fontWeight="500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
    </Box>


      
<SimpleGrid columns={{base:1,md:1,lg:2}} m="auto" gap="30px" w={{base:"1080px",lg:"700px"}} mt="-50px">
        <Box bg={useColorModeValue('gray.50', 'gray.900')} backgroundColor="white" px={6} py={10} w={{base:"588px",lg:"344px"}} h={{base:'700px',lg:"500px"}} border="1px solid #1E1E1E" borderRadius="5px" m="auto" >
        <Box><img  src="https://user-images.githubusercontent.com/104376252/228555456-d0ffa362-5db9-4eab-b1bf-188582329834.png" alt="" /></Box>

          <List spacing={3} align="left">
          <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon color="gray" fontSize={"16px"} lineHeight="19.2px" letterSpacing="-2%" fontWeight="400" />
              Plan Include :
            </ListItem>
            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon as={CheckIcon} color="blue" />
              100 mreds
            </ListItem >
            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon as={CheckIcon} color="blue" />
              Dedicated IP Pool
            </ListItem>
            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon as={CheckIcon} color="blue" />
              Residential Proxy
            </ListItem>
            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon as={CheckIcon} color="blue" />
             Unlimited Bandwidth
            </ListItem >

            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon as={CheckIcon} color="blue" />
             Worldwide Locationa
            </ListItem>
            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
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
     
        <Box bg={useColorModeValue('gray.50', 'gray.900')} backgroundColor="rgba(22, 209, 19, 0.1)" px={6} py={10} w={{base:"588px",lg:"344px"}} h={{base:'840px',lg:"600px"}}  border="1px solid #1E1E1E" borderRadius="5px" m="auto" mt="100px">
        <Box><img  src="https://user-images.githubusercontent.com/104376252/228562441-24c1ffc2-0fdd-404e-8d63-02ce5b879bd8.png" alt="" /></Box>

          <List spacing={3} align="left">
          <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon color="gray" fontSize="16px" lineHeight="19.2px" letterSpacing="-2%" fontWeight="400" />
              Plan Include :
            </ListItem>
            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon as={CheckIcon} color="blue" />
              100 mreds
            </ListItem>
            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon as={CheckIcon} color="blue" />
              Dedicated IP Pool
            </ListItem>
            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon as={CheckIcon} color="blue" />
              Residential Proxy
            </ListItem>
            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon as={CheckIcon} color="blue" />
             Unlimited Bandwidth
            </ListItem>

            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon as={CheckIcon} color="blue" />
             Worldwide Locationa
            </ListItem>
            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon as={CheckIcon} color="blue" />
             Dedicated Subnets
            </ListItem>
            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon as={CheckIcon} color="green" />
             Dedicated Subnets
            </ListItem>
            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
              <ListIcon as={CheckIcon} color="green" />
             1 Octilion IPS
            </ListItem>
            <ListItem fontSize={{base:"27.35px",lg:"16px"}} lineHeight={{base:"32.82px",lg:"19.2px"}}>
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

<Flex w={{base:"900px",lg:"708px"}} h={{base:"206.2px",lg:"142px"}} borderRadius="5px" m="auto" ml={{base:"35%" ,lg:"auto"}}  mt="21px" border="1px solid #1E1E1E"
>
    <Box w={{base:"250px",lg:"161px"}} h="99px" p="11px" mr="20px">
        <img src="https://user-images.githubusercontent.com/104376252/228572288-904027bc-5e1a-475f-8563-9f29135a0ff3.png" alt="" />
    </Box>
    <Box w={{base:"224px",lg:"161px"}} h="99px" pt="21.5px">
        <List>
        <Text fontSize={{base:"23.17px",lg:"16px"}} lineHeight={{base:"27.81px",lg:"19.2px"}} color="gray">Plan Includes</Text>
    <ListItem fontSize={{base:"23.17px",lg:"16px"}} lineHeight={{base:"27.81px",lg:"19.2px"}} fontWeight="400px">
              <ListIcon as={CheckIcon} color="blue"  />
              Whitelable IP Pool
            </ListItem>
            <ListItem fontSize={{base:"22.17px",lg:"16px"}} lineHeight={{base:"27.81px",lg:"19.2px"}} fontWeight="400px">
              <ListIcon as={CheckIcon} color="blue" />
              Whitelable Subnets
            </ListItem>
            <ListItem fontSize={{base:"23.17px",lg:"16px"}} lineHeight={{base:"27.81px",lg:"19.2px"}} fontWeight="400px">
              <ListIcon as={CheckIcon} color="blue" />
              Residential Proxy
            </ListItem> 
            </List>
    </Box>
    <Box w={{base:"240.17px",lg:"161px"}} h="99px" pt="44.5px" ml="40px">
        <List>
    <ListItem fontSize={{base:"23.17px",lg:"16px"}} lineHeight={{base:"27.81px",lg:"19.2px"}} fontWeight="400px">
              <ListIcon as={CheckIcon} color="blue"  />
              Custom Bandwidth
            </ListItem>
            <ListItem fontSize={{base:"23.17px",lg:"16px"}} lineHeight={{base:"27.81px",lg:"19.2px"}} fontWeight="400px">
              <ListIcon as={CheckIcon} color="blue" />
              Priority Support
            </ListItem>
            </List>
    </Box>
</Flex>

{/* feedback */}
<Box w={{ base:"1080px"}} m="auto">
<Box  w={{ base:"766px",lg:"510px"}} h="97px" gap="10px" m="auto" mt="80px"   >
        <Flex m="auto">
        <Text fontSize={{base:"59.31px",lg:"36px"}} lineHeight="43.2px" letterSpacing="-2%" fontWeight="600" m="auto"  >Customers </Text> <Text fontSize={{base:"59.31px",lg:"36px"}} lineHeight="43.2px" letterSpacing="-2%" fontWeight="600" ml="-15px" color="#077BFF">Love</Text> <Text fontSize={{base:"59.31px",lg:"36px"}} lineHeight="43.2px" letterSpacing="-2%" fontWeight="600"  ml="10px" color="black">Our Proxies</Text> </Flex>
        <Text fontSize={{base:"29.65px",lg:"18px"}} pt="16.47px" lineHeight={{base:"35.58px",lg:"21.6px"}} letterSpacing="-2%" fontWeight="500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
    </Box>
    </Box>

<SimpleGrid columns={{base:1,md:1,lg:3}} w={{base:"1090px",md:"700px",lg:"1192px"}} m="auto" mt="-60px" >
  <Box  m="auto" mb="28px" mt={{base:"100px"}} pb="46px" w={{base:"666px",lg:"386px"}} br="5px" border="1px solid #16D113" borderRadius="5px">
  <Box w={{base:"180px",lg:"120px"}} mt="23px" ml="25px" pb={{base:"10px"}}>
            <img  src="https://www.shutterstock.com/image-vector/five-star-feedback-vector-icon-260nw-2005262117.jpg" alt="" />
        </Box>
        <Text fontWeight="400" fontSize={{base:"29.65px",lg:"14px"}} lineHeight={{base:"35.58px",lg:"16.65px"}} letterSpacing='-2%' color="black" mt="8px" align="left" ml="25px" >“Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”</Text>
        <Flex mt="10px">
          <Box w={{base:"70px",lg:"40px"}} >
          <Image ml="15px" borderRadius="50%" src="https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGd1eXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" /></Box>
          <Box>
        <Text fontWeight={{base:"500",lg:"600"}} fontSize={{base:"29.65px",lg:"20px"}} lineHeight="24px" letterSpacing='-2%' color="black" align="left" ml="25px" pt={{base:"10px"}}>ECHO DZNS</Text>
        <Text fontWeight="400" fontSize={{base:"20px",lg:"16px"}} lineHeight="19.2px" letterSpacing='-2%' color="black" align="left" ml="25px">Web Designer, CreativeProxies</Text>
        </Box>
        </Flex>
  
  </Box>

  <Box  m="auto" mb="28px" pb="46px" w={{base:"666px",lg:"386px"}} br="5px" border="1px solid #16D113" borderRadius="5px">
  <Box w={{base:"180px",lg:"120px"}} mt="23px" ml="25px" pb={{base:"10px"}}>
            <img  src="https://www.shutterstock.com/image-vector/five-star-feedback-vector-icon-260nw-2005262117.jpg" alt="" />
        </Box>
        <Text fontWeight="400" fontSize={{base:"29.65px",lg:"14px"}} lineHeight={{base:"35.58px",lg:"16.65px"}} letterSpacing='-2%' color="black" mt="8px" align="left" ml="25px" >“Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”</Text>
        <Flex mt="10px">
          <Box w={{base:"70px",lg:"40px"}} >
          <Image ml="15px" borderRadius="50%" src="https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGd1eXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" /></Box>
          <Box>
        <Text fontWeight={{base:"500",lg:"600"}} fontSize={{base:"29.65px",lg:"20px"}} lineHeight="24px" letterSpacing='-2%' color="black" align="left" ml="25px" pt={{base:"10px"}}>ECHO DZNS</Text>
        <Text fontWeight="400" fontSize={{base:"20px",lg:"16px"}} lineHeight="19.2px" letterSpacing='-2%' color="black" align="left" ml="25px">Web Designer, CreativeProxies</Text>
        </Box>
        </Flex>
  
  </Box>

  <Box  m="auto" mb="28px" pb="46px" w={{base:"666px",lg:"386px"}} br="5px" border="1px solid #16D113" borderRadius="5px">
  <Box w={{base:"180px",lg:"120px"}} mt="23px" ml="25px" pb={{base:"10px"}}>
            <img  src="https://www.shutterstock.com/image-vector/five-star-feedback-vector-icon-260nw-2005262117.jpg" alt="" />
        </Box>
        <Text fontWeight="400" fontSize={{base:"29.65px",lg:"14px"}} lineHeight={{base:"35.58px",lg:"16.65px"}} letterSpacing='-2%' color="black" mt="8px" align="left" ml="25px" >“Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”</Text>
        <Flex mt="10px">
          <Box w={{base:"70px",lg:"40px"}} >
          <Image ml="15px" borderRadius="50%" src="https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGd1eXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" /></Box>
          <Box>
        <Text fontWeight={{base:"500",lg:"600"}} fontSize={{base:"29.65px",lg:"20px"}} lineHeight="24px" letterSpacing='-2%' color="black" align="left" ml="25px" pt={{base:"10px"}}>ECHO DZNS</Text>
        <Text fontWeight="400" fontSize={{base:"20px",lg:"16px"}} lineHeight="19.2px" letterSpacing='-2%' color="black" align="left" ml="25px">Web Designer, CreativeProxies</Text>
        </Box>
        </Flex>
  
  </Box>
 
</SimpleGrid>

<Box w="1192px" m="auto" border="1px solid #1E1E1E" borderRadius="5px" mt="250px" bg="#F6FAFF" mt="250px" >
<Box  w="510px" h="97px" gap="10px" m="auto" mt="60px" pb="141px">
        <Flex m="auto">
        <Text fontSize="36px" lineHeight="43.2px" letterSpacing="-2%" fontWeight="600" pl="46px" >Read our </Text> <Text fontSize="36px" lineHeight="43.2px" letterSpacing="-2%" fontWeight="600" ml="10px" color="#077BFF">Exclusive</Text> <Text fontSize="36px" lineHeight="43.2px" letterSpacing="-2%" fontWeight="600"  ml="10px" color="black">Blog</Text> </Flex>
        <Text fontSize="18px" mt="10px" lineHeight="21.6px" letterSpacing="-2%" fontWeight="500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
        <Text fontSize="18px" mt="10px" lineHeight="21.6px" letterSpacing="-2%" fontWeight="500" color="#077BFF">Read All Blogs</Text>
    </Box>

    <SimpleGrid columns={{base:2,md:2,lg:3}} w={{base:"100%",lg:"1192px"}} m="auto" p="35px" pb="0px" gap="25px" >
    <Box m="auto" mb="15px">
  <Box w={{base:"440px",lg:"354px"}} h={{base:"274.93px",lg:"221px"}}  br="5px" border="1px solid rgba(7, 123, 255, 0.5)" bg="rgba(7, 123, 255, 0.1)" borderRadius="5px">
  </Box>
  <Text fontWeight="500" fontSize={{base:"24.88px",lg:"20px"}} lineHeight={{base:"29.86px",lg:"24px"}} letterSpacing='-2%' color="#111822" align="left" ml="25px" pt="13px">Blog Title appear here</Text>
  <Text fontWeight="400" fontSize="16px" lineHeight="19.2px" letterSpacing='-2%' color="#111822" align="left" ml="25px">Blog Title appear here</Text>
  </Box>

  <Box m="auto" mb="15px">
  <Box w={{base:"440px",lg:"354px"}} h={{base:"274.93px",lg:"221px"}}  br="5px" border="1px solid rgba(7, 123, 255, 0.5)" bg="rgba(7, 123, 255, 0.1)" borderRadius="5px">
  </Box>
  <Text fontWeight="500" fontSize={{base:"24.88px",lg:"20px"}} lineHeight={{base:"29.86px",lg:"24px"}} letterSpacing='-2%' color="#111822" align="left" ml="25px" pt="13px">Blog Title appear here</Text>
  <Text fontWeight="400" fontSize="16px" lineHeight="19.2px" letterSpacing='-2%' color="#111822" align="left" ml="25px">Blog Title appear here</Text>

  </Box>


  <Box m="auto" mb="15px">
  <Box w={{base:"440px",lg:"354px"}} h={{base:"274.93px",lg:"221px"}}  br="5px" border="1px solid rgba(7, 123, 255, 0.5)" bg="rgba(7, 123, 255, 0.1)" borderRadius="5px">
  </Box>
  <Text fontWeight="500" fontSize={{base:"24.88px",lg:"20px"}} lineHeight={{base:"29.86px",lg:"24px"}} letterSpacing='-2%' color="#111822" align="left" ml="25px" pt="13px">Blog Title appear here</Text>
  <Text fontWeight="400" fontSize="16px" lineHeight="19.2px" letterSpacing='-2%' color="#111822" align="left" ml="25px">Blog Title appear here</Text>

  </Box>

  <Box m="auto" mb="15px">
  <Box w={{base:"440px",lg:"354px"}} h={{base:"274.93px",lg:"221px"}}  br="5px" border="1px solid rgba(7, 123, 255, 0.5)" bg="rgba(7, 123, 255, 0.1)" borderRadius="5px">
  </Box>
  <Text fontWeight="500" fontSize={{base:"24.88px",lg:"20px"}} lineHeight={{base:"29.86px",lg:"24px"}} letterSpacing='-2%' color="#111822" align="left" ml="25px" pt="13px">Blog Title appear here</Text>
  <Text fontWeight="400" fontSize="16px" lineHeight="19.2px" letterSpacing='-2%' color="#111822" align="left" ml="25px">Blog Title appear here</Text>

  </Box>
  <Box m="auto" mb="15px">
  <Box w={{base:"440px",lg:"354px"}} h={{base:"274.93px",lg:"221px"}}  br="5px" border="1px solid rgba(7, 123, 255, 0.5)" bg="rgba(7, 123, 255, 0.1)" borderRadius="5px">
  </Box>
  <Text fontWeight="500" fontSize={{base:"24.88px",lg:"20px"}} lineHeight={{base:"29.86px",lg:"24px"}} letterSpacing='-2%' color="#111822" align="left" ml="25px" pt="13px">Blog Title appear here</Text>
  <Text fontWeight="400" fontSize="16px" lineHeight="19.2px" letterSpacing='-2%' color="#111822" align="left" ml="25px">Blog Title appear here</Text>

  </Box>

  <Box m="auto" mb="15px">
  <Box w={{base:"440px",lg:"354px"}} h={{base:"274.93px",lg:"221px"}}  br="5px" border="1px solid rgba(7, 123, 255, 0.5)" bg="rgba(7, 123, 255, 0.1)" borderRadius="5px">
  </Box>
  <Text fontWeight="500" fontSize={{base:"24.88px",lg:"20px"}} lineHeight={{base:"29.86px",lg:"24px"}} letterSpacing='-2%' color="#111822" align="left" ml="25px" pt="13px">Blog Title appear here</Text>
  <Text fontWeight="400" fontSize="16px" lineHeight="19.2px" letterSpacing='-2%' color="#111822" align="left" ml="25px">Blog Title appear here</Text>

  </Box>
  
</SimpleGrid>


</Box>

</Box>
  )
}
