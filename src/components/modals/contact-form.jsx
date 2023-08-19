import React, { useState } from "react";
import { Box, Divider, FormControl, FormLabel, Input, ModalCloseButton, Textarea, Button, Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure, useColorMode } from '@chakra-ui/react';
import "../styles/navbar.css";
import "../styles/contact-form.css";
import emailjs from 'emailjs-com';
import AlertInfo from "./alert";

const ContactForm = () => {
    // const { REACT_APP_EMAIL_SERVICES_KEY, REACT_APP_EMAIL_TEMPLATE_NAME, REACT_APP_EMAIL_PUBLIC_KEY} = process.env;
    
    const { colorMode } = useColorMode();
    const [alert, setAlert] = useState(null); // State for the alert

    // Check if the current color mode is dark or light
    const toColor = colorMode === "dark" ? "white" : "black";

    const [loading, setLoading] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const emailSubject = "Someone wants to get in touch with you!";

    const [formData, setFormData] = useState({
        to: "johanesyefta012@gmail.com",
        from: "",
        subject: emailSubject,
        body: ""
    })

    const showAlert = (status, info) => {
        setAlert(<AlertInfo status={status} info={info} />);

        setTimeout(() => {
            setAlert(null); // Remove the alert
        }, 3000);
    }

    const sendEmail = async (event) => {
        event.preventDefault();

        setLoading(true);

        try {
            const templateParams = {
                to_email: formData.to,
                user_email: formData.from,
                message: formData.body
            };

            await emailjs.send(process.env.EMAIL_SERVICES_KEY, process.env.EMAIL_TEMPLATE_NAME, templateParams, process.env.EMAIL_PUBLIC_KEY);
            showAlert("success", "Yay, Email sent successfully!");

            // Reset form data and close the modal after sending the email
            setFormData({
                to: "johanesyefta012@gmail.com",
                from: "",
                subject: emailSubject,
                body: ""
            });

            onClose();
        } catch (err) {
            showAlert("error", "An error occurred while trying to send your email");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Button className="navbar-button-contact" onClick={onOpen}>Contact</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered blockScrollOnMount={true}>
                <ModalOverlay />

                <ModalContent maxW={"3xl"} minH={"60vh"} borderRadius={25} position={"relative"}>
                    <ModalBody py={90} px={16}>
                        <ModalCloseButton border={`2px solid ${toColor}`} className="modal-close-button" fontSize={20}></ModalCloseButton>
                        <div className="navbar-form-title">Get in touch</div>
                        <FormControl>
                            <Box className="navbar-form-layout" paddingTop={10}>
                                <FormLabel className="navbar-form-label">To:</FormLabel>
                                <FormLabel className="navbar-form-emailTo" color="black">{formData.to}</FormLabel>
                            </Box>

                            <Divider orientation='horizontal' borderColor={toColor}/>
                            
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

                            <Divider orientation='horizontal' borderColor={toColor}/>
                            
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
                                <Button
                                    className="navbar-form-submit"
                                    type="submit"
                                    backgroundColor={toColor}
                                    color={colorMode === "dark" ? "black" : "white"}
                                    _hover={{ backgroundColor: colorMode === "dark" ? "#e8e8e8" : "#222222", cursor: "pointer" }}
                                    isLoading={loading}
                                    loadingText="Sending..."
                                    onClick={sendEmail}
                                >
                                    Send
                                </Button>
                            </Box>
                        </FormControl>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    left: "20px", 
                    zIndex: "9999"
                }}
            >
                {alert}
            </div>
        </>
    );
}
 
export default ContactForm;
