import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { Box, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SliderComp from "./SliderComp";
import chatimg from "../image/chatimg.png";

const SimpleSlider = () => {
  const [item, setItem] = useState(0);

  useEffect(() => {
    let timerId = setInterval(() => {
      if (item !== 5) {
        setItem((p) => p + 1);
      } else {
        setItem(0);
      }
    }, 2000);
    return () => {
      clearInterval(timerId);
    };
  }, [item]);

  const handleRightArrow = () => {
    if (item !== 5) {
      setItem((p) => p + 1);
    } else {
      setItem(0);
    }
  };

  const handleLeftArrow = () => {
    if (item !== 0) {
      setItem((p) => p - 1);
    } else {
      setItem(5);
    }
  };

  return (
    <Box pl={5} pr={5} mb={8}>
      <Typography
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontWeight="bold"
        fontSize="4.5rem"
        sx={{
          "@media(max-width:430px)": {
            fontSize: "3rem",
          },
          "@media(max-width:350px)": { fontSize: "2.5rem", mt: "20px" },
        }}
      >
        Testimonials
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <ArrowCircleLeft
          onClick={handleLeftArrow}
          sx={{
            width: "50px",
            height: "50px",
            cursor: "pointer",
            color: "#27ecf6",
          }}
        />
        <CardMedia
          component="img"
          src={chatimg}
          sx={{
            width: "350px",
            height: "350px",
            position: "absolute",
            zIndex: "-1",
            opacity: "0.4",
            top: "-50px",
            animation: "upDown 2s linear 1s infinite",
            "@keyframes upDown": {
              "0%": { top: "-50px" },
              "50%": { top: "-40px" },
              "100%": { top: "-50px" },
            },
            "@media(max-width:425px)": {
              width: "250px",
              height: "250px",
            },
          }}
        />
        <SliderComp item={item} />
        <ArrowCircleRight
          onClick={handleRightArrow}
          sx={{
            width: "50px",
            height: "50px",
            cursor: "pointer",
            color: "#27ecf6",
            backgroundClip: "revert",
          }}
        />
      </Box>
    </Box>
  );
};

export default SimpleSlider;
