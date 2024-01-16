import { Box, Flex, Spacer, Link, Button,Image } from "@chakra-ui/react";
import Bsound from "./Bsound";
import menu from "../assets/menu.png"

const Navbar = () => {
    return (
        <Box bg="transparent" p={4} position={"absolute"} top={0} width="100%" textColor={"whitesmoke"}>
            <Flex alignItems="center">
                <Link href="/" fontSize="xl" fontWeight="bold">
                    <Image src={menu} h={8} bgColor={"white"} p={2} borderRadius={3}/>
                </Link>
                <Spacer />
                <Bsound/>
                <Button bg={"purple.200"} fontWeight={'bold'}>
                    Dummy Streaks
                </Button>
            </Flex>
        </Box>
    );
};

export default Navbar;
