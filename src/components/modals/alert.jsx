import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const AlertInfo = ({ status, info }) => {
    return (
        <div>
            <Alert status={status}>
                <AlertIcon />
                {info}
            </Alert>
        </div>
    );
}
 
export default AlertInfo;