import {Box, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({title, description, imageSrc}) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return <VStack key={title} sx={{borderRadius: "2%"}} bg="white" color="black">
        <Box>
            <Image sx={{borderRadius: "2%"}} src={imageSrc}></Image>
        </Box>
        <VStack sx={{alignItems: "left"}} px={5} py={3}>
            <Heading as="h2" size="rg">{title}</Heading>
            <Text sx={{color: "gray"}}>{description}</Text>
            <HStack>
                <Text>See more</Text>
                <FontAwesomeIcon icon={faArrowRight} size="1x"/>
            </HStack>
        </VStack>
    </VStack>
};

export default Card;

