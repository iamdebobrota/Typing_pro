import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

function Result() {
  const { accuracy, pressedkey, wpm } = useSelector(
    (store) => store.AppReducer
  );
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          gap: "40px",
          marginTop: "50px",
        }}
      >
        <Stack variant="h4">
          <Text style={{ fontSize: "30px" }}>WPM :- {wpm}</Text>
        </Stack>
        <Stack variant="h4">
          <Text style={{ fontSize: "30px" }}>Accuracy :- {`${accuracy}%`}</Text>
        </Stack>
      </Box>
      <Stack marginTop= "20px" >
        <Text fontSize="20px">
          Number of keys pressed in a 5 min :- {pressedkey}
        </Text>
      </Stack>
    </Box>
  );
}

export default Result;
