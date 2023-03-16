import { Box,  Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Random = () => {
  const {presentText} = useSelector((store) => store.AppReducer);
  
  console.log(presentText)
  
  return (
    <Box
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        border: "1px solid black",
        width: "25%",
        margin: "auto",
        paddingBottom: "20px",
        marginTop: "30px",
        marginBottom: "40px",
        borderRadius: "10px",
      }}
    >
      <Text p="5">
        {presentText}
      </Text>
    </Box>
  );
};

export default Random;
