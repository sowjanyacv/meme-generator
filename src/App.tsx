import { Flex } from "@chakra-ui/react";

import { TheHeader } from "./components/TheHeader";

import { theme } from "./styles/theme";
import "./styles/fonts.css";

export const App = () => {
  return (
    <Flex
      dir="column"
      flexWrap="wrap"
      m="0"
      width="550px"
      background={theme.colors.white}
      fontFamily="'Kalam', cursive"
      color={theme.colors.black}
      gap="0px"
    >
      <TheHeader />
    </Flex>
  );
};
