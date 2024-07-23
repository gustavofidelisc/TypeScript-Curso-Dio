import {
  Box,
  Center,
  Input,
} from "@chakra-ui/react";
import { DButton } from "../DButton";
import { login } from "../../services/login";
import { useState } from "react";


export const CardLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");

  //<p>{userData?.name}</p>
  //ternario       {userData === null || userData ===undefined && <h1>Loading...</h1> }

  return (
    <Box
      backgroundColor="gray.100"
      borderRadius="25px"
      padding="10"
      width="400px"
      margin="center"
    >
      {/*{userData === null ||
        (userData === undefined ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Informações carregadas</h1>
        ))}*/}
      <Center>
        <h1>Faça o Login </h1>
      </Center>

      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <Input
        placeholder="Passoword"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Center>
        <DButton onCLick={() => login(email)} />
      </Center>
    </Box>
  );
};
