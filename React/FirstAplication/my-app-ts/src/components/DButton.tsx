import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IDButton {
    onCLick: MouseEventHandler
}

export const DButton = ({onCLick} : IDButton) => {
    return (
        <Button onClick={onCLick} colorScheme="teal" size="sm" width="100%" marginTop="5px">
         Entrar 
        </Button>
     )
    }