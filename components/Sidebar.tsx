import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Flex, Text, Divider } from "@chakra-ui/layout";
import Link from "next/link"


const Sidebar = () => {

    return (

        <Flex as="nav" flexDirection="column" bgColor="teal.700" height="100vh" width="15%" >
            <Flex flexDirection="column" alignItems="center" >
                <Avatar size="lg" mt="10px"></Avatar>
                <Text as="h3" size="md" mt={2} color="white">Turki Albasheer</Text>
            </Flex>
            <Divider />
            <Flex as="nav" height="70%" flexDirection="column" alignItems="center"mt={4} justifyContent="space-evenly">
                {/* <Flex flexDirection="column" bgColor="blue.200"> */}
                <Button as="a">Home</Button>
                <Button as="a">Posts</Button>
                <Button as="a">Profile</Button>
                <Button as="a">Contact</Button>
                {/* </Flex> */}
            </Flex>
        </Flex>
    )
}

export default Sidebar