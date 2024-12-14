import React, { useState } from "react";
import { Box, Divider, FormControl, FormLabel, Input, ModalCloseButton, Textarea, Button, Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure, useColorMode } from '@chakra-ui/react';
import "../styles/navbar.css";
import "../styles/contact-form.css";
import AlertInfo from "./alert";

const ContactForm = () => {
    const { colorMode } = useColorMode();
    const [alert, setAlert] = useState(null);

    // Check if the current color mode is dark or light
    const toColor = colorMode === "dark" ? "white" : "white";

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
            setAlert(null);
        }, 3000);
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const isFormValid = () => {
        if (!formData.from || !formData.body) {
            showAlert("error", "Please fill in your email and message!");
            return false;
        }
        if (!validateEmail(formData.from)) {
            showAlert("error", "Your email address seems not valid");
            return false;
        }
        return true;
    };

    const sendEmailRequest = () => {
        const templateParams = {
            to_email: formData.to,
            user_email: formData.from,
            message: formData.body
        };
    
        return fetch("https://nathstudio-api.vercel.app/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(templateParams)
        });
    };

    const handleSuccess = () => {
        showAlert("success", "Yay, Email sent successfully!");
    
        // Reset form data and close the modal
        setFormData({
            to: "johanesyefta012@gmail.com",
            from: "",
            subject: emailSubject,
            body: ""
        });
    
        onClose();
    };

    const sendEmail = async (event) => {
        event.preventDefault();
        setLoading(true);
    
        try {
            if (!isFormValid()) return;
    
            const response = await sendEmailRequest();
    
            if (response.ok) {
                handleSuccess();
            } else {
                const data = await response.json();
                throw new Error(data.message || "An error occurred while sending your email");
            }
        } catch (error) {
            showAlert("error", error.message || "An error occurred while trying to send your email");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button color="white" className="navbar-button-contact" onClick={onOpen}>Contact</Button>

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
                                    backgroundColor="black"
                                    color="white"
                                    _hover={{ backgroundColor: colorMode === "dark" ? "#e8e8e8" : "#222222", cursor: "pointer" }}
                                    isLoading={loading}
                                    loadingText="Sending..."
                                    onClick={sendEmail}
                                >
                                    Send
                                </Button>
                            </Box>

                            {/* Alert dialogue */}
                            <Box className="alert-form-submit-wrapper">
                                {alert}
                            </Box>
                        </FormControl>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
 
export default ContactForm;
