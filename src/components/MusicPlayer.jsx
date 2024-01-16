import React, { useState, useRef } from 'react';
import { Image, Box, Button, Heading, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Flex } from '@chakra-ui/react';
import play from "../assets/play.png"
import pause from "../assets/pause.png"

const MusicPlayer = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipTrackHandler = (direction) => {
    if (direction === 'skip-forward') {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    } else if (direction === 'skip-back') {
      setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    }
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setCurrentTime(current);
    setDuration(duration);
  };

  const songEndHandler = () => {
    // Automatically play the next song when the current one ends
    skipTrackHandler('skip-forward');
  };

  const seekHandler = (value) => {
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Heading mb={4} color={"whiteAlpha.700"}>{songs[currentSongIndex].title}</Heading>
      <audio
        ref={audioRef}
        src={songs[currentSongIndex].src}
        onTimeUpdate={timeUpdateHandler}
        onEnded={songEndHandler}
      ></audio>
      <Flex>
        <Button mr={2} onClick={() => skipTrackHandler('skip-back')}>
          Skip Back
        </Button>
        <Image src={isPlaying ? pause : play} onClick={playPauseHandler} height={8}/>
        <Button ml={2} onClick={() => skipTrackHandler('skip-forward')}>
          Skip Forward
        </Button>
      </Flex>
      <Slider mt={4} value={currentTime} max={duration || 0} onChange={(value) => seekHandler(value)}>
        <SliderTrack bg="gray.200">
          <SliderFilledTrack bg="teal.500" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
    </Box>
  );
};

export default MusicPlayer;
