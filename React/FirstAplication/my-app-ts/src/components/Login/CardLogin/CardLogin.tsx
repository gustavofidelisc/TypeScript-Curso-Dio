import {
  ChakraProvider,
  Box,
  Center,
  Input,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { MyButton } from "../../Button";
import { login } from "../../../services/login";
import { AlertLogin } from "../AlertLogin/AlertLogin";

export const CardLogin = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleLogin = () => {
    login(onOpen);
  };
  return (
    <ChakraProvider>
      <Flex
        minHeight={"83vh"}
        backgroundColor={"rgb(30, 25, 44)"}
        padding={"25px"}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          backgroundColor={"#FFFFFF"}
          borderRadius={"25px"}
          padding={"15px"}
          width={["100%", "80%", "70%", "60%"]} // Responsivo
          maxWidth="800px" // Aumentado o tamanho máximo
        >
          <Center>
            <h1>Faça Login</h1>
          </Center>
          <Input placeholder="email" marginBottom={"10px"}></Input>
          <Input placeholder="password" marginBottom={"10px"}></Input>
          <Center>
            <MyButton
              event={handleLogin}
              colorScheme={"teal"}
              size={"sm"}
              width={"100%"}
              marginTop={"5px"}
              text={"entrar"}
            ></MyButton>
          </Center>
          {isOpen && <AlertLogin></AlertLogin>}
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
