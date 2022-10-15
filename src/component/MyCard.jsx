import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box } from "@mui/system";

export default function MyCard({ ele }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 250,
        width: 280,
        "@media(max-width:420px)": { width: 280 },
      }}
    >
      <CardActionArea>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={ele.Image}
            alt="video background"
            sx={{
              padding: "40px",
              "@media(max-width:420px)": { padding: "30px" },
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textTransform: "uppercase",
              fontSize: "1.5rem",
              color: "#fff",
            }}
          >
            {ele.content}
          </Typography>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" fontWeight={500}>
            {ele.heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ele.para}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {ele.link}
        </Button>
      </CardActions>
    </Card>
  );
}
