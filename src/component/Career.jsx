import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Career = () => {
  return (
    <Box
      pl={9}
      pr={3}
      pb={10}
      pt={10}
      sx={{
        background: "linear-gradient(160deg,#27ecf6,#fff)",
        display: {
          md: "flex",
          sm: "block",
          "@media(max-width:430px)": { paddingLeft: "20px" },
        },
      }}
    >
      <Box sx={{ width: { md: "65%", sm: "100%" } }}>
        <Typography
          fontSize="4.5rem"
          variant="h5"
          fontWeight="bold"
          sx={{ "@media(max-width:430px)": { fontSize: "3rem" } }}
        >
          Grow your Career <br />
          with Antriksh!
        </Typography>
        <Typography variant="p">
          If you love to create, think, ideate, design, write, analyse,
          research, get in touch with us for one of the following roles :
        </Typography>
        <br />
        <br />
        <Typography variant="p">
          We at Antriksh are always eager to add valuable creative & skilled
          professionals to our team from time to time while also collaborating
          with freelancers within our network.
        </Typography>
      </Box>
      <Box
        sx={{
          width: { md: "65%", sm: "100%" },
          marginTop: { md: "0px", sm: "50px" },
          "@media(max-width:430px)": { marginTop: "50px" },
        }}
        display="flex"
        gap={2}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Button
          variant="outlined"
          sx={{ width: "250px", color: "#000", border: "1px solid black" }}
        >
          Content Writer
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "250px", color: "#000", border: "1px solid black" }}
        >
          Video Editor
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "250px", color: "#000", border: "1px solid black" }}
        >
          Graphic Designer
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "250px", color: "#000", border: "1px solid black" }}
        >
          Website Designer
        </Button>
        <Typography textAlign="center" fontWeight={800} variant="h6">
          Send us a resume we can’t refuse at contact@antrikshglobal.com
        </Typography>
      </Box>
    </Box>
  );
};

export default Career;
