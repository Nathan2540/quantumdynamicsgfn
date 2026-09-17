import { Box } from "@chakra-ui/react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Price from "../components/sections/Price";
import Footer from "../components/sections/Footer";
import Reg from "../components/sections/Register";
import RobotMascot from "../components/sections/RobotMascot";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import Navbar from "../components/sections/Nav";
import GetWebsitePromo from "../components/sections/Promo";
import HolidayBootcamp from "../components/sections/Bootcamp";

const Home = () => {
    return ( 
<Box>
    <Navbar/>
    <Hero />
    <About />

    <Reg/>
    <HolidayBootcamp/>
    <GetWebsitePromo/>
     <RobotMascot/>
     <TestimonialsSection />
    <Footer/>
</Box>

     );
}
 
export default Home;