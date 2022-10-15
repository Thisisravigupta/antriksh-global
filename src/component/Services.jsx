import { Box, Typography } from "@mui/material";
import React from "react";
import MyCard from "./MyCard";
import Picture1 from "../image/Picture1.png";
import Picture2 from "../image/Picture2.png";
import Picture3 from "../image/Picture3.png";
import Picture4 from "../image/Picture4.png";
import Picture5 from "../image/Picture5.png";
import Picture6 from "../image/Picture6.png";
import Picture7 from "../image/Picture7.png";

const ServicesContent = [
  {
    content: "Video",
    Image: Picture2,
    heading: "Video Creation",
    para: "Videos comprise the majority of the visual content being consumed worldwide. Video...",
    link: "Know More",
  },
  {
    content: "Design",
    Image: Picture1,
    heading: "Graphic Designing",
    para: "A design that has a person's attention has halfway gotten their interest in bying...",
    link: "Know More",
  },
  {
    content: "Content",
    Image: Picture3,
    heading: "Content Writing",
    para: "Words can weave magic for readers. It is true not only for fiction literature but...",
    link: "Know More",
  },
  {
    content: "Digital",
    Image: Picture4,
    heading: "Digital Makerting",
    para: "Imagining the world without social media is impossible. It further makes having a...",
    link: "Know More",
  },
  {
    content: "Web",
    Image: Picture7,
    heading: "Website Development",
    para: "An immersive website is the first online digital address of your business. Having a...",
    link: "Know More",
  },
  {
    content: "Sound",
    Image: Picture6,
    heading: "Sound Production",
    para: "Audio is the soul of visual communication that creates the desired impact on your...",
    link: "Know More",
  },
  {
    content: "Consultation",
    Image: Picture5,
    heading: "Consultation",
    para: "Have you wondered about your brand's visual & digital identity status? Just like a...",
    link: "Know More",
  },
];

const Services = () => {
  return (
    <Box pl={5} pr={5} mb={5}>
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
          "@media(max-width:350px)": { fontSize: "2.5rem", mt:"20px" },
        }}
      >
        Our Services
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        rowGap={8}
        marginTop={5}
        sx={{
          "@media(max-width:430px)": {
            marginTop: "20px",
            rowGap: "20px",
          },
        }}
      >
        {ServicesContent.map((ele, idx) => {
          return <MyCard key={idx} ele={ele} />;
        })}
      </Box>
    </Box>
  );
};

export default Services;
