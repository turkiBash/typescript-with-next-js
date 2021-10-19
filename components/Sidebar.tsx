import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Flex, Text, Divider } from "@chakra-ui/layout";
import Link from "next/link"


const Sidebar = () => {

    return (

        <Flex
            as="nav"
            flexDirection="column"
            bgColor="teal.700"
            height="100vh"
            width="15%"
            pos="sticky"
            boxShadow="xl"

        >
            <Flex
                flexDirection="column"
                alignItems="center"

            >
                <Avatar
                    size="lg"
                    mt="10px"
                ></Avatar>
                <Text
                    as="h3"
                    size="md"
                    mt='10px'
                    color="white"
                >Turki Albasheer</Text>
            </Flex>
            <Divider mt='10px' />
            <Flex
                as="nav"
                height="200px"
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
            >
                <Button variant="ghost" width="100%" as="a">Home</Button>
                <Button variant="ghost" width="100%" as="a">Posts</Button>
                <Button variant="ghost" width="100%" as="a">Profile</Button>
                <Button variant="ghost" width="100%" as="a">Contact</Button>
            </Flex>
        </Flex>
    )
}

export default Sidebar