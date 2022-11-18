import { Button, Grid, Input, Image, Flex, Text } from "@chakra-ui/react";
import { ChangeEvent, FC, useEffect, useState } from "react";

import { theme } from "../styles/theme";
import "../styles/fonts.css";

export type InputFormProps = {};

export const Form = (props: {
  label: string;
  top: boolean;
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
      name={props.top ? "topText" : "bottomText"}
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
  const [meme, setMeme] = useState<{
    url: string;
    topText: string;
    bottomText: string;
  }>({
    url: "",
    topText: "Top Text",
    bottomText: "Bottom Text",
  });
  const [allMemes, setAllMemes] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    };
    fetchData();
  }, []);

  const getMemeImage = () => {
    const randomNumber: number = Math.floor(Math.random() * allMemes.length);
    const url: string = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      url: url,
    }));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <Flex flexDir="column">
      <Grid
        gridTemplate="40px 40px / 1fr 1fr"
        gap="17px"
        margin="36px"
        marginBottom="0px"
      >
        <Form label="Top Text" onChangeHandler={handleChange} top={true} />
        <Form label="Bottom Text" onChangeHandler={handleChange} top={false} />
        <Button
          fontFamily="'Kalam', cursive"
          borderRadius="5px"
          border="1px solid #d3af37"
          color={theme.colors.white}
          background={theme.colors.black}
          gridColumn="1/-1"
          cursor="pointer"
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
