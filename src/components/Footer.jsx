import { Box, Text, Link, Flex } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    
    <Box as="footer" p={4} bg={"blackAlpha.800"} color="white">
        <Flex direction={"column"} alignItems={"center"}>
            <Text>Made with ❤️ by Aniruddha</Text>
            <Text>&copy; 2024 2DummyStreaks</Text>
            <Link href="#" ml={4} color="white" fontWeight="bold">
            Privacy Policy
            </Link>
        </Flex>
    </Box>

  )
}

export default Footer