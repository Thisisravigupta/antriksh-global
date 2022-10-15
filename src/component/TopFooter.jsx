import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, CardMedia, Link, Typography } from "@mui/material";
import React from "react";
import image from "../image/antriksh-inverted.png";

const footerLink = [
  "About",
  "Services",
  "Case Studies",
  "Blogs",
  "Contact",
  "Privacy Policy",
];

const TopFooter = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      backgroundColor="#03989e"
      color="#fff"
      gap={10}
      p={9}
      sx={{ "@media(max-width:430px)": { padding: "30px" } }}
    >
      <Box>
        <CardMedia component="img" src={image} sx={{ width: "250px" }} />
        <Typography mt={2} mb={3}>
          Brains that Brand!
        </Typography>
        <Box gap={1} display="flex">
          <FacebookRounded fontSize="large" />
          <Instagram fontSize="large" />
          <LinkedIn fontSize="large" />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={2}
        pr={10}
        mr={10}
        textAlign="left"
      >
        {footerLink.map((link, ind) => {
          return (
            <Link key={ind} sx={{ color: "#fff", fontWeight: "bold" }}>
              {link}
            </Link>
          );
        })}
      </Box>
      <Box pr={10} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h4">Let's Connect</Typography>
        <Link sx={{ color: "#fff" }}>+91 8806214198</Link>
        <Typography variant="h4">Drop us a mail</Typography>
        <Link sx={{ color: "#fff" }}>contect@antrikshglobal.com</Link>
      </Box>
    </Box>
  );
};

export default TopFooter;
