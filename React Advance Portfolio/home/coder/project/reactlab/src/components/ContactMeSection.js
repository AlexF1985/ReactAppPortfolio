import React, {useEffect} from "react";
import {useFormik} from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
        const {isLoading, response, submit} = useSubmit();
        const {onOpen} = useAlertContext();

        const formik = useFormik({
                initialValues: {firstName: "", email: "", type: "", comment: ""},
                onSubmit: async (values, actions) => {
                    await submit("", values);
                }, validationSchema:
                    Yup.object({
                        firstName: Yup.string().required(),
                        email: Yup.string().email().required(),
                        comment: Yup.string().required(),
                    }),
            }
        );

        useEffect(() => {
            if (response?.type !== undefined) {
                onOpen(response.type, response.message)
                if (response.type === 'success') {
                    formik?.resetForm()
                }
            }
        }, [response])

        return (
            <FullScreenSection
                isDarkBackground
                backgroundColor="#512DA8"
                py={16}
                spacing={8}
            >
                <VStack w="1024px" p={32} alignItems="flex-start">
                    <Heading as="h1" id="contactme-section">
                        Contact me
                    </Heading>
                    <Box p={6} rounded="md" w="100%">
                        <form onSubmit={formik.handleSubmit}>
                            <VStack spacing={4}>
                                <FormControl
                                    isInvalid={formik.touched?.firstName === true && formik.errors?.firstName !== undefined}>
                                    <FormLabel htmlFor="firstName">Name</FormLabel>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <FormErrorMessage>Required</FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    isInvalid={formik.touched?.email === true && formik.errors?.email !== undefined}>
                                    <FormLabel htmlFor="email">Email Address</FormLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <FormErrorMessage>Required</FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                                    <Select id="type" name="type"
                                            value={formik.values.type}
                                            onChange={formik.handleChange}
                                    >
                                        <option value="hireMe">Freelance project proposal</option>
                                        <option value="openSource">
                                            Open source consultancy session
                                        </option>
                                        <option value="other">Other</option>
                                    </Select>
                                </FormControl>
                                <FormControl
                                    isInvalid={formik.touched?.comment === true && formik.errors?.comment !== undefined}>
                                    <FormLabel htmlFor="comment">Your message</FormLabel>
                                    <Textarea
                                        id="comment"
                                        name="comment"
                                        height={250}
                                        value={formik.values.comment}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <FormErrorMessage>Required</FormErrorMessage>
                                </FormControl>
                                <Button type="submit" colorScheme="purple" width="full" disabled={isLoading}>
                                    {isLoading ? "Loading..." : "Submit"}
                                </Button>
                            </VStack>
                        </form>
                    </Box>
                </VStack>
            </FullScreenSection>
        );
    }
;

export default LandingSection;
