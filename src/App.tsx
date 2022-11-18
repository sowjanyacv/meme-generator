import { Flex } from "@chakra-ui/react";

import { TheHeader } from "./components/TheHeader";
import { InputForm } from "./components/InputFrom";

import { theme } from "./styles/theme";
import "./styles/fonts.css";

export const App = () => {
  return (
    <Flex
      flexDir="column"
      width="550px"
      background={theme.colors.white}
      fontFamily="'Kalam', cursive"
      color={theme.colors.black}
      overflow="clip"
    >
      <TheHeader />
      <InputForm />
    </Flex>
  );
};
