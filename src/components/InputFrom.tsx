import { Button, Grid, Input, Image, Flex, Text } from "@chakra-ui/react";
import { ChangeEvent, FC, useState } from "react";

import { theme } from "../styles/theme";
import "../styles/fonts.css";
import memesData from "../memesData";

export type InputFormProps = {};

export const Form = (props: {
  label: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Input
      onChange={props.onChangeHandler}
      fontFamily="'Kalam', cursive"
      borderRadius="5px"
      border="1px solid #d3af37"
      textAlign="center"
      placeholder={props.label}
    />
  );
};

export const MemeText = (props: { text: string; top: boolean }) => {
  return (
    <Text
      position="relative"
      top={props.top ? "120px" : ""}
      bottom={props.top ? " " : "120px"}
      fontSize="36px"
      textAlign="justify"
      textShadow="2px 2px 0 #fff,
        -2px -2px 0 #fff,
        2px -2px 0 #fff,
        -2px 2px 0 #fff,
        0 2px 0 #fff,
        2px 0 0 #fff,
        0 -2px 0 #fff,
        -2px 0 0 #fff,
        2px 2px 5px #fff"
    >
      {props.text}
    </Text>
  );
};

export const InputForm: FC<InputFormProps> = () => {
  const [topInput, setTopInput] = useState<string>("");
  const [bottomInput, setBottomInput] = useState<string>("");
  const [meme, setMeme] = useState<{
    url: string;
    topText: string;
    bottomText: string;
  }>({
    url: "https://i.imgflip.com/1e7ql7.jpg",
    topText: "Top Text",
    bottomText: "Bottom Text",
  });

  const getMemeImage = () => {
    if (topInput === "" || bottomInput === "") {
      alert("The value is empty.");
      return;
    }
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme({
      url: memesArray[randomNumber].url,
      topText: topInput,
      bottomText: bottomInput,
    });
  };

  const changeTopText = (event: ChangeEvent<HTMLInputElement>) => {
    setTopInput(event.target.value);
  };

  const changeBottomText = (event: ChangeEvent<HTMLInputElement>) => {
    setBottomInput(event.target.value);
  };

  return (
    <Flex flexDir="column">
      <Grid
        gridTemplate="40px 40px / 1fr 1fr"
        gap="17px"
        margin="36px"
        marginBottom="0px"
      >
        <Form label="Top Text" onChangeHandler={changeTopText} />
        <Form label="Bottom Text" onChangeHandler={changeBottomText} />
        <Button
          fontFamily="'Kalam', cursive"
          borderRadius="5px"
          border="1px solid #d3af37"
          color={theme.colors.white}
          background={theme.colors.black}
          gridColumn="1/-1"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </Button>
      </Grid>
      <Flex flexDir="column" width="100%" alignItems="center">
        <MemeText text={meme.topText} top={true} />
        <Image src={meme.url} alt="Meme Image" width="85%" height="70%" />
        <MemeText text={meme.bottomText} top={false} />
      </Flex>
    </Flex>
  );
};
