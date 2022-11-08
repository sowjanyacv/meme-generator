import { Flex } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import { theme } from "./styles/theme";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <Flex
    height="100vh"
    width="100vw"
    background={theme.colors.grey}
    justifyContent="center"
  >
    <App />
  </Flex>
);
