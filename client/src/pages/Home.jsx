import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  Stack,
  Select,
  FormLabel,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BsFillClockFill } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      m={"auto"}
      align="center"
      boxShadow="2xl"
      p="5"
      rounded="md"
      mt={"30"}
      width={[
        "100%", // base
        "80%", // 480px upwards
        "80%", // 768px upwards
        "70%", // 992px upwards
      ]}
      gap={"8"}
      flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
      justifyContent="space-around"
      bg={"white"}>
      <Heading size="xl" color={"crimson"}>
        Check your typing skills in a minute
      </Heading>
      <Flex
        width={[
          "100%", // base
          "80%", // 480px upwards
          "80%", // 768px upwards
          "70%", // 992px upwards
        ]}
        // gap={"8"}
        flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
        justifyContent="space-around"

        // bg={"white"}
      >
        <Stack mt="6">
          <Image
            src="lady.svg"
            alt="lady image"
            letterSpacing="widest"
            transform="scale(1.2)"></Image>
          <Button
            _hover={{ bg: "crimson", color: "white" }}
            borderColor="crimson"
            color={"crimson"}
            size="xs"
            variant="outline"
            borderRadius={"full"}>
            BENCHMARK
          </Button>
        </Stack>
        <Box textAlign={"center"}>
          <Text pt={"8"} w={"80%"} margin="auto">
            TypingTest.com offers a free online Typing Test and exciting typing
            games and keyboarding practice. Check your wpm for free now!{" "}
          </Text>
          <Flex gap="2" alignItems={"center"} mt={"5"} justifyContent="center">
            <FormLabel>
              {" "}
              <BsFillClockFill fontSize="3vh" />
            </FormLabel>
            <Select
              placeholder="1 Minute Test"
              w={"40%"}
              variant="filled"
              borderRadius={"2xl"}
              size={"sm"}>
              <option value="2mintest">2 Minute Test</option>
              <option value="3minTest">3 Minute Test</option>
              <option value="5minTest">5 Minute Test</option>
            </Select>
          </Flex>
          <Flex gap="2" alignItems={"center"} mt={"5"} justifyContent="center">
            <FormLabel>
              {" "}
              <MdLibraryBooks fontSize="3vh" />
            </FormLabel>
            <Select
              placeholder="Medium Text"
              w={"40%"}
              variant="filled"
              borderRadius={"2xl"}
              size={"sm"}>
              <option value="easyText">Easy Text</option>
              <option value="mediumText">Medium Text</option>
              <option value="hardText">Hard Text</option>
            </Select>
          </Flex>
          <Button
            mt={"5"}
            colorScheme="green"
            onClick={() => navigate("/typing")}>
            START TEST
          </Button>
        </Box>
        <Flex direction={"column"} mt="8" gap="1">
          <Button
            _hover={{ bg: "crimson", color: "white" }}
            borderColor="crimson"
            color={"crimson"}
            size="xs"
            // mt="20"
            variant="outline"
            borderRadius={"full"}
            letterSpacing="widest">
            TRAIN
          </Button>
          <Image
            src="gentleman.svg"
            alt="lady image"
            mt="20"
            transform="scale(2)"></Image>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
