import { Flex, Text, Image } from "@chakra-ui/react";
import { FC } from "react";

import { theme } from "../styles/theme";

export type TheHeaderProps = {};

export const TheHeader: FC<TheHeaderProps> = () => {
  return (
    <Flex
      width="550px"
      height="65px"
      background={theme.colors.black}
      pl="20px"
      gap="10px"
    >
      <Image
        height="65px"
        width="65px"
        src={require("../images/logo.png")}
        alt="Logo"
      />
      <Text fontSize="21px" fontWeight="bold" color={theme.colors.gold}>
        Meme Generator
      </Text>
    </Flex>
  );
};
