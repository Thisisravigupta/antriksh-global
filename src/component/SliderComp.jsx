import React from "react";
import { Box, Typography } from "@mui/material";

const SliderContent = [
  {
    para: `It was great working with the Antriksh Team. These guys are very creative and committed to their job.
    They were very adept in adjusting with our requirements and did a wonderful job in coming up with the
    final product.`,
    h4: `Pranjal Deep`,
    h6: `Afour Technologies`,
  },
  {
    para: `The whole team of Antriksh exactly knows what the customer needs and rightly aligns respective media &
    digital solutions to realise the desired outcome. All the services in their portfolio are the best in the
    market and I would highly recommend Antriksh to anyone looking for a visual and online facelift.`,
    h4: `Chetan Talele`,
    h6: `Target Tutorials`,
  },
  {
    para: `The experience working with their team was great!! They have done a fabulous job with our project's show
    flat video!.`,
    h4: `Janhavi Garodia`,
    h6: `Jewel Group`,
  },
  {
    para: `It was an awesome experience with the Antriksh team. The special thing about them is they really think
    according to the vision which you wanna create. Keep up the good work!!!.`,
    h4: `Somesh Gosh`,
    h6: `Aloite Tech`,
  },
  {
    para: `Awesome team, superb skills and a stupendous zeal to give their best!`,
    h4: `Dr. Mangesh Virkar`,
    h6: `Nature's Tray`,
  },
  {
    para: `Antriksh has a peculiar way of working on any kind of video project which leads to a highly satisfactory
    outcome. The profile film they made for my business was simply impressive and it helped my business gain
    attention from my potential clients`,
    h4: `Ayushi Sharma`,
    h6: `Gway Infra`,
  },
];

const SliderComp = ({ item }) => {
  return (
    <Box width="60%" m={5}>
      <Typography
        variant="p"
        display="flex"
        justifyContent="center"
        textAlign="center"
      >
        {SliderContent[item].para}
      </Typography>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mt={2} mb={2}>
        {SliderContent[item].h4}
      </Typography>
      <Typography variant="h6" fontWeight="bold" textAlign="center">
        {SliderContent[item].h6}
      </Typography>
    </Box>
  );
};

export default SliderComp;
