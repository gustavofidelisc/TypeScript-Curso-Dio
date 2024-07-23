import { Box } from "@chakra-ui/react";

interface ICardInfo {
    text: string;
}

export const CardInfo = ({text}: ICardInfo) => {
  return (
    <Box backgroundColor="white" width={320} minHeight="120px" padding={8} borderRadius="25px">
      Informações do acesso
    </Box>
  );
};
