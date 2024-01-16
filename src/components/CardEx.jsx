import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Box, Link } from '@chakra-ui/react'
import { Stack , Image,Text , Divider, ButtonGroup, Button } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';


const CardEx = ({link , desc}) => {
  return (
    <Link bg={'blackAlpha.600'} borderRadius={6} p={6} w={["100%" , "30%"]} href={desc.onclick}>
     <Stack>
        <Box bgImage={`url(${link})`} borderRadius={6} bgSize={"cover"} bgRepeat={"no-repeat"} height={"300px"} bgPos={"center"}></Box>
        <Heading color={"whitesmoke"}>
          {desc.name}
        </Heading>
        <Text color={"whitesmoke"}>
          {desc.words}
        </Text>

     </Stack>

    </Link>
  )
}

export default CardEx