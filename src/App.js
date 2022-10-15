import { Box } from "@mui/material";
import Client from "./component/Client";
import Main from "./component/Main";
import { Navbar } from "./component/Navbar";
import SimpleSlider from "./component/SimpleSlider";
import Services from "./component/Services";
import Career from "./component/Career";
import TopFooter from "./component/TopFooter";
import Footer from "./component/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <Main />
      <Services />
      <Client />
      <SimpleSlider />
      <Career />
      <TopFooter />
      <Footer/>
    </Box>
  );
}

export default App;
