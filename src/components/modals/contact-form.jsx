import React, { useState } from "react";
import { Box, Divider, FormControl, FormLabel, Input, ModalCloseButton, Text, Textarea } from '@chakra-ui/react';
import { Button, Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import "../styles/navbar.css";
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const emailSubject = "Someone wants to get in touch with you!";

    const [formData, setFormData] = useState({
        to: "johanesyefta012@gmail.com",
        from: "",
        subject: emailSubject,
        body: ""
    })

    const sendEmail = async (event) => {
        event.preventDefault();

        try {
            const templateParams = {
                to_email: formData.to,
                from_name: formData.from,
                message: formData.body
            };

            await emailjs.send('service_d99p1sk', 'template_web-portfolio', templateParams, '_dZy7QpU4c5pktPH4');

            alert('Email sent successfully');
        } catch (err) {
            console.error("Error sending email", err);
        }
    }

    return (
        <>
            <Button className="navbar-button-contact" onClick={onOpen}>Contact</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered blockScrollOnMount={false}>
                <ModalOverlay />

                <ModalContent maxW={"3xl"} h={"70vh"} borderRadius={25} position={"relative"}>
                    <ModalBody py={90} px={16}>
                        <ModalCloseButton className="modal-close-button" fontSize={20}></ModalCloseButton>
                        <Text className="navbar-form-title">Get in touch</Text>
                        <FormControl>
                            <Box className="navbar-form-layout" paddingTop={10}>
                                <FormLabel className="navbar-form-label">To:</FormLabel>
                                <FormLabel className="navbar-form-emailTo">{formData.to}</FormLabel>
                            </Box>

                            <Divider orientation='horizontal' borderColor="black"/>
                            
                            <Box className="navbar-form-layout">
                                <FormLabel className="navbar-form-label" paddingTop={2}>From:</FormLabel>
                                <Input
                                    className="navbar-form-emailFrom"
                                    type="email"
                                    name="emailFrom"
                                    focusBorderColor="transparent"
                                    placeholder="Your email"
                                    onChange={(e) => setFormData({...formData, from: e.target.value})}
                                    value={formData.from} />
                            </Box>

                            <Divider orientation='horizontal' borderColor="black"/>
                            
                            <Box>
                                <Textarea
                                    className="navbar-form-body"
                                    placeholder="Your message"
                                    name="emailBody"
                                    rows="4"
                                    focusBorderColor="transparent"
                                    border="transparent"
                                    resize="none"
                                    onChange={(e) => setFormData({...formData, body: e.target.value})}
                                    value={formData.body}
                                >
                                </Textarea>
                            </Box>

                            <Box className="navbar-form-submit-wrapper">
                                <Button className="navbar-form-submit" type="submit" backgroundColor="black" color="white" onClick={sendEmail}>Send</Button>
                            </Box>
                        </FormControl>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
 
export default ContactForm;
