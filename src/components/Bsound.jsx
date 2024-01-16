import React from 'react'
import { useState, useEffect } from 'react';
import birthday from "../assets/HappyB.mp3";
import { Box, Button, Flex, Image } from '@chakra-ui/react';
import play from "../assets/play.png"
import pause from "../assets/pause.png"

const Bsound = () => {

    const [isPlaying , setIsPlaying] = useState(true)
    const [audio] = useState(new Audio(birthday));

  
    const playSound = () => {
      audio.play();
    };
  
    const stopSound = () => {
      audio.pause();
      setIsPlaying(false)
      audio.currentTime = 0;
    };
  
    // Use useEffect to play the sound when the component mounts
    useEffect(() => {
      playSound();
      setIsPlaying(true)
  
      // Cleanup the audio on component unmount
      return () => {
        stopSound();
      };
    }, []);

    function handleClick () {
        isPlaying ? stopSound() : playSound();
        setIsPlaying(!isPlaying);
    }

    return (
        <Flex marginRight={5} justifyContent={'space-around'}>
          <Image src={isPlaying ? pause : play} onClick={handleClick} height={8}/>
       </Flex>
      );
    }
    

export default Bsound