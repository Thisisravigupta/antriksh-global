import { Box, Button, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import slide2 from "../image/slide2.gif";

const style = {
  width: "100%",
  background: "linear-gradient(to bottom, #27ecf6, #07b7bd)",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
  padding: { lg: "10px 30px", sm: "30px 10px" },
  marginTop:"60px",

  "@media (max-width: 500px)": {
    flexDirection: "column",
  },
};

const Main = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Antriksh!",
        "Global",
        "Storytellers",
        "Experimentors",
        "Thinkers",
        "Ideators",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <Box sx={style}>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          padding: { lg: "50px", sm: "20px" },
          "@media (max-width: 500px)": {
            width: "100%",
            padding: "20px",
          },
        }}
      >
        <Typography
          sx={{
            marginBottom: "10px",
            fontSize: { lg: "60px", sm: "40px" },
            "@media (max-width:500px)": { fontSize: "55px" },
            "@media (max-width:340px)": { fontSize: "40px" },
          }}
          fontWeight="bold"
        >
          We are <br />
          <span ref={el}></span>
        </Typography>
        <Typography
          variant="p"
          fontSize="1.08rem"
          sx={{
            "@media (max-width:340px)": { fontSize: "1rem" },
          }}
        >
          Every business starts with a dream, a vision. Every product/service
          has a story waiting to be discovered, to be promoted. We at Antriksh
          help you with the apt narration, representation & strategization of
          your product’s media creation & marketing.
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "150px",
            padding: "15px 0",
            marginTop: "20px",
            "@media (max-width: 500px)": {
              width: "130px",
              padding: "10px 0",
            },
          }}
        >
          Let's Connect
        </Button>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
          "@media (max-width: 500px)": {
            width: "100%",
            padding: "20px",
          },
        }}
      >
        <CardMedia
          component="img"
          src={slide2}
          sx={{ width: { sm: "15rem", lg: "25rem" } }}
        />
      </Box>
    </Box>
  );
};

export default Main;
