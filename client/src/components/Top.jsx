import { Box, Stack } from "@chakra-ui/react"
import React from "react";

function Top() {
  return (
    <Box style={{ paddingTop: "20px",
     borderRadius: 1, height: "100px" }}>
      <Stack
        variant="h2"
        style={{ color: "white", fontWeight: "800",
         letterSpacing: "8px" }}
      >
        Touch Typing
      </Stack>
    </Box>
  );
}

export default Top;
