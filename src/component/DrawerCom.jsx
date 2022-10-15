import { Menu } from "@mui/icons-material";
import { Box, Button, Drawer, IconButton, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const PAGES = ["Home", "About us", "Services", "Case Studies", "Blog"];

const DrawerCom = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={(e, value) => setValue(value)}
            onClick={() => setOpenDrawer(false)}
            orientation="vertical"
          >
            {PAGES.map((page, index) => (
              <Tab label={page} key={index}></Tab>
            ))}
          </Tabs>
          <Button
            variant="contained"
            sx={{ marginTop: "10px" }}
            onClick={() => setOpenDrawer(false)}
          >
            Contact
          </Button>
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu />
      </IconButton>
    </>
  );
};

export default DrawerCom;
