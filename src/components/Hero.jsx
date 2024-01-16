import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Center,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [heading, setHeading] = useState("");

  function getTimeOfDay() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // Note: Months are zero-based

    if (currentMonth === 0 && currentDay === 17) {
      return "It's Jan 17th! It's your Bday 🎂🎉🍫";
    }

    if (currentHour >= 5 && currentHour < 12) {
      return "Hiii! Dummy Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Hiii! Dummy Good Noon";
    } else if (currentHour >= 17 && currentHour < 20) {
      return "Hiii! Dummy Good Evening";
    } else {
      return "Hiii! Dummy Good Night";
    }
  }

  useEffect(() => {
    const dayTime = getTimeOfDay();
    const speed = 100;

    let index = 0;
    const timer = setInterval(() => {
      if (index < dayTime.length) {
        setHeading((prevText) => prevText + dayTime.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      paddingLeft={[7, 100, 100]}
      paddingRight={[8, 100, 100]}
      height={["100vh", "100vh", "105vh"]}
      textColor={"whitesmoke"}
      paddingTop={200}
      bg={`url('https://images.unsplash.com/photo-1534996858221-380b92700493?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}
      backgroundSize="cover"
      backgroundPosition="center"
      width="100%"
    >
      <Flex
        align="center"
        direction={["column", "row"]}
        justifyContent={"center"}
      >
        <Box flex="1" textAlign={"center"}>
          <Heading
            fontSize={["xxx-large", "xxx-large", "3.5rem"]}
            mb={4}
            textColor={"whitesmoke"}
          >
            {heading}
          </Heading>
          <Text fontSize="lg">
            Keep the streak alive! Work hard today, because even a rocket needs
            a boost to reach the stars. 🚀💪
          </Text>
          <Button
            marginTop={[16, 8, 8]}
            bg={"blue.100"}
            width={["50%", "15%", "15%"]}
            color={"black"}
            fontSize={"large"}
            fontWeight={"bold"}
            onMouseOver={() => {
              play();
            }}
            onClick={() => play()}
          >
            Streaks
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
