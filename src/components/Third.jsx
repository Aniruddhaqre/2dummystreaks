import { Box, Center, Container, Flex, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import MusicPlayer from './MusicPlayer'

import kasoor from "../music/kasoor.mp3"
import RomanticFLight from "../music/RomanticFLight.mp3"
import nothing from "../music/nothing.mp3"

const Third = () => {

    const songs = [
        { title: 'kasoor', src: kasoor },
        { title: 'Romantic Flight', src: RomanticFLight },
        { title: 'Nothing', src: nothing },
        // Add more songs as needed
      ];
   
  return (
    <Box width={"100%"} height={["max-content" , "110vh", "110vh"]} padding={[6 , 12 , 12 ]} bgImage={`url('https://images.unsplash.com/photo-1472712739516-7ad2b786e1f7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`} bgSize={'cover'} bgPosition={'center'} backgroundBlendMode="multiply" id='musicplayer
    '>
        <MusicPlayer songs={songs}/>
        
    </Box>
  )
}

export default Third