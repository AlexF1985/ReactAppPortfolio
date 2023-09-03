import React from "react";
import {Avatar, Heading, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const avatarUrl = "https://i.pravatar.cc/150?img=7";
const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365"
    >
        <VStack spacing={10}>
            <VStack>
                <Avatar size={'rg'} src={avatarUrl}></Avatar>
                <Heading as='h3' size='rg'>{greeting}</Heading>
            </VStack>
            <VStack>
                <Heading as='h2' size='2xl'>{bio1}</Heading>
                <Heading as='h2' size='2xl'>{bio2}</Heading>
            </VStack>
        </VStack>

    </FullScreenSection>
);

export default LandingSection;

