import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import one from "../image/ClientImg/1.svg";
import two from "../image/ClientImg/2.svg";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
} from "./ClientImg";

let imageUrl = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
];
const style = {
  background: "linear-gradient(160deg, #FFFFFF,#27ecf6)",
};
const Client = () => {
  return (
    <Box pl={5} pr={5} pb={5} mb={5} style={style}>
      <Typography
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontWeight="bold"
        fontSize="4.5rem"
        sx={{
          "@media(max-width:430px)": { fontSize: "3rem" },
          "@media(max-width:350px)": {
            fontSize: "2.5rem",
            mt: "20px",
            mb: "20px",
          },
        }}
      >
        Our Clients
      </Typography>
      <Box
        width="100%"
        textAlign="center"
        display="flex"
        justifyContent="center"
      >
        <Typography variant="p" width="70%" fontSize={17}>
          We are global and capable of delivering projects worldwide, thanks to
          seamless digital integration and adherence to proven productive &
          creative processes every time. We have worked for regional &
          international brands from different sectors - engineering,
          manufacturing, consumer tech, edtech, education, hospitality,
          healthcare, IT, ITeS, real estate, etc.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        rowGap={5}
        columnGap={9}
        padding="40px"
        marginTop={5}
        sx={{
          "@media(max-width:430px)": { marginTop: "20px", rowGap: "20px" },
        }}
      >
        {imageUrl.map((ele, idx) => {
          return (
            <CardMedia
              key={idx}
              image={ele}
              component="img"
              sx={{
                width: "70px",
                objectFit: "contain",
                "@media(max-width:350px)": { width: "100px" },
              }}
            />
          );
        })}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={5}
      >
        <Box
          width={200}
          height={200}
          bgcolor="#DFF6FF"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ transition: "all 1s ease", ":hover": { bgcolor: "#03689f" } }}
        >
          <CardMedia
            component="img"
            image={one}
            sx={{ width: "60%", padding: "20px" }}
          />
          <Typography fontWeight="bold">10+</Typography>
          <Typography fontWeight="bold">Sectors</Typography>
        </Box>
        <Box
          width={200}
          height={200}
          bgcolor="#DFF6FF"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ transition: "all 1s ease", ":hover": { bgcolor: "#03689f" } }}
        >
          <CardMedia
            component="img"
            image={two}
            sx={{ width: "60%", padding: "20px" }}
          />
          <Typography fontWeight="bold">100+</Typography>
          <Typography fontWeight="bold">Clients</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Client;
