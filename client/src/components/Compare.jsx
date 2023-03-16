import * as types from "../Redux/typing/typeActionType";
import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getParagraphData } from "../Redux/typing/typeAction";

const plainText = [
  "aada aa aa aa",
  "sds sklj;s ss ss",
  "dd dd dd dd",
  "ll ll ll ll",
  "asdf l;l;",
  "ls dj al dl",
  "as as as as",
  "dss dss dss fdss",
  "df df df df",
  "ff f;f jfjf ff",
  "gg gg gg gg",
  "asdj ;lgf",
  "sdja hl;g",
  "djsa lg;h",
  "hh hsdah hh hh",
  "jj jj jj jj",
  "kkkk gghkk kk",
  "gh gh gh gh",
  "jk jk jk jk",
  "l; l; l; l;",
  "sa df gj lk",
  "dj aasdfl sk ;l",
  "as df gj kl",
  "sd jg la ;k",
  "djsa fghl",
  "sadj hgfl",
  "jdassdl;gh",
  "adsjjhj ;flg",
  "sjaddssglh;",
  "js;lhg",
  "das das das das",
  "jala alala lalala",
];
const Compare = () => {
  const presentText = useSelector((store) => store.AppReducer.presentText);

  const [inputtypes, setInputtypes] = useState("");
  const [presenttchar, setPresenttchar] = useState(presentText[0]);
  const [runt, setRunt] = useState(null);
  const [all, setAll] = useState(1);
  const [gltchars, setGltchars] = useState(0);
  const [curc, setCurc] = useState({});
  const [seconds, setSeconds] = useState(0);
  const [times, setTimes] = useState(null);
  const [allchar, setAllchar] = useState(0);
  const [gltchar, setGltchar] = useState(0);
  const [level, setLevel] = useState("plainText");

  const dispatch = useDispatch();

  if (seconds % 300 === 0 && seconds !== 0 && times) {
    clearInterval(times);
    setSeconds(0);
    console.log("ll");
    const match = (Date.now() - runt) / 1000;
    const WPM = Math.round(allchar / 5 / (match / 60));
    const NumWPM = Math.round((allchar - gltchar) / 5 / (match / 60));
    const accuracy = Math.floor((NumWPM * 100) / WPM);
    dispatch({ type: types.TYPE_5MIN, payload: { allchar, WPM } });
  }

  function runtr() {
    setAllchar(0);
    setGltchar(0);
    let id = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    setTimes(id);
  }

  const handleTextChange = () => {
    if (level === "plainText") {
      const randomValue = Math.floor(Math.random() * plainText.length);

      setPresenttchar(plainText[randomValue][0]);

      dispatch({ type: types.TYPE_CHANGE, payload: plainText[randomValue] });
    }
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setInputtypes(value);
    if (seconds === 0 && !times) {
      let id = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      setTimes(id);
    }

    let test = "";
    for (let i = 0; i < value.length; i++) {
      test = test + presentText[i];
      if (value[i] === presentText[i] && curc[i] === undefined) {
        curc[i] = true;
        setCurc({ ...curc });
      } else if (curc[i] === undefined) {
        curc[i] = false;
        setCurc({ ...curc });
      }
    }

    if (value.length > inputtypes.length) {
      setAll((pre) => pre + 1);
      setAllchar(allchar + 1);
    }

    //  word per min
    if (!runt) {
      setRunt(Date.now());
    }

    if (test !== value) {
      setGltchars(gltchars + 1);
      setGltchar(gltchar + 1);
    } else {
      if (value[value.length - 1] === presentText[value.length - 1]) {
        setPresenttchar(presentText[value.length]);
      }
    }

    if (test === value && value.length === presentText.length) {
      const match = (Date.now() - runt) / 1000;
      const WPM = Math.round(all / 5 / (match / 60));
      const NumWPM = Math.round((all - gltchars) / 5 / (match / 60));

      const accuracy = Math.floor((NumWPM * 100) / WPM);

      setInputtypes("");
      setRunt(null);
      setAll(1);
      setCurc({});
      setGltchars(0);
      dispatch({
        type: types.TYPE_SHOW,
        payload: { wpm: WPM, accuracy: accuracy },
      });
      handleTextChange();
    }
  };

  useEffect(() => {
    handleTextChange();
    // dispatch(getParagraphData())
  }, []);

  const minutes = Math.floor(seconds / 60);
  const secondss = seconds % 60;

  return (
    <Flex direction={"column"} alignItems="center">
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        gap={"20px"}
        marginTop={"20px"}
        marginBottom={"30px"}>
        <Flex justifyContent={"space-between"} alignItems="center">
          <Text pr="8">Enter Key </Text>
          <Box boxShadow="outline" p="3" rounded="md" bg="white">
            {presenttchar === " " ? "Space" : presenttchar}
          </Box>
        </Flex>
        <Box>
          Minutes: {minutes} Seconds: {secondss}
          {seconds === 0 && (
            <Button colorScheme="blue" onClick={runtr}>
              Start
            </Button>
          )}
        </Box>
      </Box>
   
        <Input
          placeholder="Start Typing..."
          w="50%"
          value={inputtypes}
          onChange={handleInput}
        />
    </Flex>
  );
};

export default Compare;
