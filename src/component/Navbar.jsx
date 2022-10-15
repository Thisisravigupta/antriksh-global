import {
  AppBar,
  Button,
  CardMedia,
  Toolbar,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../image/logo.png";
import DrawerCom from "./DrawerCom";

const PAGES = ["Home", "About us", "Services", "Case Studies", "Blog"];

export const Navbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);
  return (
    <AppBar>
      <Toolbar
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CardMedia
          component="img"
          src={logo}
          sx={{ width: "150px", marginLeft: { lg: "50px" } }}
        />
        {isMatch ? (
          <>
            <DrawerCom />
          </>
        ) : (
          <>
            <Tabs value={value} onChange={(e, value) => setValue(value)}>
              {PAGES.map((page, index) => (
                <Tab label={page} key={index}></Tab>
              ))}
            </Tabs>
            <Button variant="contained" sx={{ marginRight: "50px" }}>
              Contact
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
