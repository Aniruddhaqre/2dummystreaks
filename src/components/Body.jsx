import { Box, Center, Container, Flex, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import CardEx from './CardEx'

const Body = () => {
    const images = [{i : "https://plus.unsplash.com/premium_photo-1677109899422-e81b8a9f97b0?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , desc : {name : "Streaks" , words : "Work hard, laugh harder. Success is just productivity with a sense of humor.", onclick : "#streaks"}} , 
    {i : "https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , desc : {name : "Music" , words : "Music is the universal language of peace; let its harmonies soothe your soul and bridge the gaps between hearts." , onclick : "#musicplayer"}}
     ]
  return (
    <Box width={"100%"} height={["max-content" , "110vh", "110vh"]} padding={[6 , 12 , 12 ]} bgImage={`url('https://images.unsplash.com/photo-1607499699372-7bb722dff7e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`} bgSize={'cover'} bgPosition={'center'} backgroundBlendMode="multiply">
        <Box textColor={"whiteAlpha.900"} fontWeight="2rem">
            <Heading textAlign={"center"}>Your Zone</Heading>
        </Box>
        <Flex gap={4} direction={["column" , "column" , "row"]} justifyContent={["space-between" , "space-around"]} marginTop={8}>
        {
            images.map((c) => {
                return <CardEx key={c.i} link={c.i} desc={c.desc}/>
            })
        }

        </Flex>
    </Box>
  )
}

export default Body