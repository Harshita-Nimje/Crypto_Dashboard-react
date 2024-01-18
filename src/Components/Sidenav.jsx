import {Box, HStack,Icon, Stack,Text,Heading} from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { MdContactSupport } from "react-icons/md";
import{Link} from "react-router-dom"

const Sidenav = () => {

        const navLinks = [
        {
            icon: RxDashboard,
            text:"Dashboard",
            link: "/",
        },
        {
            icon: GrTransaction,
            text:"Transactions",
            link: "/transactions",
        },
    ]  

  return(
    <Stack bg="white" justify="space-between" boxShadow={{base:"none", lg:"lg"}} w={{base:"full", lg:"16rem"}} h="100vh" >
        
       <Box>
       <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">CRYPTO</Heading>
        <Box mt="6" mx="3">
        {navLinks.map((nav)=>(
            <Link to={nav.link} key={nav.text}>
            <HStack ms=" 12px" py="3" borderRadius="10px" px="4" _hover={{
                bg: "#a3b18a",
                color:"#344e41"
            }}>
                <Icon as={nav.icon}/>
                <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
            </HStack>
            </Link>
        ))}
        </Box>
       </Box>

        <Box mt="6" mx="3" mb="6">
            <Link to="/support">
        <HStack ms=" 12px"  py="3" borderRadius="10px" px="4" _hover={{
                bg: "#a3b18a",
                color:"#344e41"
            }}>
                <Icon as={MdContactSupport}/>
                <Text fontSize="14px" fontWeight="medium">Support</Text>
            </HStack>
            </Link>
        </Box>
       
    </Stack>
  )

}

export default Sidenav
